import React, { useContext, useEffect, useState } from 'react'
import './ProductDetail.css'
import { ProductContext } from '../../Context/Product'
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const context = useContext(ProductContext);
  const param = useParams();
  const product = context.products.find(f => f.id === Number.parseInt(param.id));
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const isAdded = context?.carts?.find(c => c.id === product.id);
    if (isAdded) {
      setIsAddedToCart(true);
    } else {
      setIsAddedToCart(false);
    }
  }, [context.carts, product.id])

  useEffect(() => {
    if (quantity) {
      product.quantity = quantity;
    }
  }, [quantity, product])
  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.imgSrc} alt='' />
      </div>
      <div className="product-text">
        <h2>{product.name}</h2>
        <div className="type">Type: {product.type}</div>
        <div className="price">Price: ${product.rate}</div>
        <div className="desc">{product.desc}</div>
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
          {!isAddedToCart && <div className='btn' onClick={() => context.addToCart(product)}>
            <i className="pi pi-cart-plus"></i>
            Add to Cart
          </div>}
          {isAddedToCart && <div className='btn' onClick={() => context.removeFromCart(product)}>
            <i className="pi pi-cart-minus"></i>
            Remove From Cart
          </div>}
        </div>
      </div>
    </div>
  )
}
