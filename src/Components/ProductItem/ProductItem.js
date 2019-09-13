import React from 'react';
import { FaPlus } from "react-icons/fa";
import {Link} from 'react-router-dom'

const ProductItem = (props) =>{
    console.log(props.product)
    return(


        <div className="product" >
        <li className="name">{props.product.name}</li>
        <img className="img" src={props.product.image} alt="product-name"/>   
        <Link to={`/products/${props.product.id}`}
           onClick={() => props.setCurrentProduct(props.product)}> 
        <p className="plus"><FaPlus/></p>
        </Link> 
        
        </div>
       
    )
}

export default ProductItem;