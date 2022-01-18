import React, {FC} from 'react'
import ProductList from './components/ProductList'

const App: FC = () => {

    return (
        <div className="container">
            <h1>Products</h1>
            <ProductList />
        </div>
    )
}

export default App