import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import ProductDetailsPage from'./Components/ProductDetailPage/ProductDetailPage'


class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      currentProduct:{}
    };
  }

  getProductData = async () => {
    const products = await axios.get('https://bike-products-app-api.herokuapp.com/products');
    const apiData = products.data;
    // console.log(apiData)
    this.setState({
      apiData:apiData,
      apiDataLoaded:true
    })
  }

   setCurrentProduct = (product) =>{
     this.setState({
      currentProduct: product
     })
   }

   componentDidMount = async () => {
     await this.getProductData()
   }


  render() {
    const products = this.state.apiData;

    return (
      <div className="App">
        <NavBar />
     <Switch>
        <Route 
        exact path="/products"  
        render={()=> <Products products={products} 
                               setCurrentProduct={this.setCurrentProduct} /> }
        />
        <Route exact path="/" 
        render={()=> <Home  /> }
        />

        <Route exact path="/products/:id" 
        render={()=> <ProductDetailsPage  products={products} 
                                          setCurrentProduct={this.setCurrentProduct} 
                                          currentProduct={this.state.currentProduct}/> }
        />


      
    </Switch>
        </div>
      
    );
  }
}

export default App;