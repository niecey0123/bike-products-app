import React from 'react';
import bike from '../../images/landing.jpg'
import {Link} from 'react-router-dom'

const Home = props =>{
    return(
    <div className="homepage-container container" > 
    <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
    <img className="landing" src={bike} alt="Bike Rider" />
    <div className="text-block">
    <p className="quote">What you seek is seeking you!</p>
    <p className="question">Want to explore the Big Apple? </p>
    <Link to="/products"><button>Check Out Our Rentals</button></Link>
  </div>    
  </div>
</div>
    )
}
    

export default Home;