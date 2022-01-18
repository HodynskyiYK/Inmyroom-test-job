import React, {FC} from 'react'
import tumbaImg from '../assets/tumba.png'
import star from '../assets/star.png'
import heart from '../assets/heart.svg'
import cart from '../assets/cart.svg'

const Product: FC = () => {
    return (
        <div className="product-item multicolor">
            <div className="product-image">
                <p className="image">
                    <img src={tumbaImg} alt="tumba" />
                </p>
                <p className="title">Bedside table Rubus with two drawers</p>
            </div>
            <div className="rating">
                <span className="star">
                    <img src={star} alt="star"/>
                </span>
                <span className="star">
                    <img src={star} alt="star"/>
                </span>
                <span className="star">
                    <img src={star} alt="star"/>
                </span>
                <span className="star">
                    <img src={star} alt="star"/>
                </span>
                <span className="rating-value">4.11</span>
            </div>
            <div className="price">
                <span className="new-price">1 123 ₴</span>
                <span className="old-price">2 500 ₴</span>
            </div>
            <div className="color">Black</div>
            <div className="material">Textile</div>
            <div className="size">w. 349 х h. 234 х d. 323</div>
            <div className="mechanism">French cot</div>
            <div className="salesman">Laska Family</div>
            <div className="product-buttons">
                <button className="btn compare-btn">
                    <img src={heart} alt="heart"/>
                </button>
                <button className="btn cart-btn">
                    <img src={cart} alt=""/>Add to cart
                </button>
            </div>
        </div>
    )
}

export default Product