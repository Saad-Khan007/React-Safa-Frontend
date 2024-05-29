import React, { useContext, useEffect, useState } from 'react'
import './ProductDetail.css'
import { ProductContext } from '../../Context/Product'
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { products, carts, removeFromCart, addToCart, showToast, token } = useContext(ProductContext);
  const param = useParams();
  const navigator = useNavigate();
  const product = products.find(f => f._id === param.id);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const addToCartHandler = (id, q) => {
    if (token) {
      addToCart(id, q);
    } else {
      showToast('error', 'Cart', 'Please login first to add it to your cart list.');
      navigator('/login');
    }
  };

  useEffect(() => {
    const isAdded = carts?.find(c => c.product._id === product?._id);
    if (isAdded) {
      setIsAddedToCart(true);
    } else {
      setIsAddedToCart(false);
    }
  }, [carts, product])

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product?.imgSrc} alt='' />
      </div>
      <div className="product-text">
        <h2>{product?.name}</h2>
        <div className="type">Type: {product?.type}</div>
        <div className="price">Price: ${product?.rate}</div>
        <div className="desc">{product?.desc}</div>
        {!isAddedToCart && <div className="quantity">
          <div className="btn1" onClick={() => {
            const inputValue = parseInt(quantity);
            const newQuantity = inputValue > 1 ? inputValue - 1 : 1;
            setQuantity(newQuantity);
          }}>-</div>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <div className="btn1" onClick={() => {
            const inputValue = parseInt(quantity);
            const newQuantity = inputValue >= 1 ? inputValue + 1 : 1;
            setQuantity(newQuantity);
          }}>+</div>
        </div>}
        <div className="btn-container">
          {!isAddedToCart && <div className='btn' onClick={() => addToCartHandler(param.id, quantity)}>
            <i className="pi pi-cart-plus"></i>
            Add to Cart
          </div>}
          {isAddedToCart && <div className='btn' onClick={() => removeFromCart(carts?.find(c => c.product._id === product?._id)._id)}>
            <i className="pi pi-cart-minus"></i>
            Remove From Cart
          </div>}
        </div>
      </div>
    </div>
  )
}
