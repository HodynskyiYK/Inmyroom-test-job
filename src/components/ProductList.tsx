import React, {FC} from 'react'
import Product from './Product'

const ProductList: FC = () => {
    return (
        <div className="product-catalog">
            <ul className="catalog-description multicolor">
                <li />
                <li>Rating</li>
                <li>Price</li>
                <li>Color</li>
                <li>Material</li>
                <li>Size</li>
                <li>Mechanism</li>
                <li>Salesman</li>
            </ul>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default ProductList