import React from 'react'
import '../styles/productCard.css'

export default function ProductCard(props) {
  return (
    <div className='product-card-container'>
        <div className="product-card-image">
                <img src={props.image} alt="" />
        </div>
        <div className="product-card-content">
            <h3 className="product-card-content-bold">{props.heading}</h3>
            <p className="product-card-content-light">{props.para}</p>    
            <span className="product-card-content-bold">{props.span}</span>
        </div>
    </div>
  )
}
