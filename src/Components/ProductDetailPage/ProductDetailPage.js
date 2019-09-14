import React from 'react';
import {Link} from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";



const ProductDetailPage = ({currentProduct})=>{
    console.log(currentProduct)
    return(

      <section className="section">
          <div className="container">
                <h1 className="title">{currentProduct.name}</h1>
                 <img className="detailImg" src={currentProduct.image} alt="product-name"/> 
                <p className="detailPrice">Price: ${currentProduct.price}</p>
              <br></br>
           <Link to="/products" className="arrow"><h3><FaAngleLeft /> Back </h3> </Link>
         </div>
     </section>
 
        
    )
}

export default ProductDetailPage;