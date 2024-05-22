import React, { useContext, useEffect } from 'react'
import './ProductDetail.css'
import { ProductContext } from '../../Product'
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const context = useContext(ProductContext);
  const param = useParams();
  const product = context.products.find(f => f.id === Number.parseInt(param.id));

  useEffect(() => {
    console.log(product);
  })

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.imgSrc} alt='' />
      </div>
      <div className="product-text">
        <h2>Derringers</h2>
        <div className="type">Type: {product.type}</div>
        <div className="price">Price: {product.rate}</div>
        <div className="desc">{product.desc}</div>
        <div className="quantity">
          <div className="btn1">-</div>
          <input type="number" />
          <div className="btn1">+</div>
        </div>
        <div className="btn-container">
          <div className='btn'>
            <i className="pi pi-cart-plus"></i>
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  )
}
