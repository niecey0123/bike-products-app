import React from 'react';
import ProductItem from '../ProductItem/ProductItem'


const Products = (props) =>{
    console.log(props.products)
    const productData = props.products && props.products.map((product,index) => {
    return <ProductItem key={product.id}
                        product={product}    
                        setCurrentProduct={props.setCurrentProduct} />    
                      
    })

    return(
        <div className="product-list-container" >
        <h1>Welcome to the Products Page</h1>
        <div className="product-list" >
        {productData}
        
        </div>
        </div>       
    )}

export default Products;


