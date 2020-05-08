import React, { Component } from 'react';
import Header from "./header/header";
import Info from "./info/info";
import Services from "./services/services";
import Choose from "./choose/choose";
import Offers from "./offers/offers";
import Customers from "./customers/customers";
import Sales from "./sales/sales";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import "./home.css";




class Home extends Component {

  
  render(){
    return ( 
      
          <div className="home">

                        <Header />
                        <Info />
                        <Services />
                        <Choose />
                        <Offers />
                        <Customers />
                        <Sales />
                        <Contact />
                        <Footer />
                
                    
              
              
          </div>
      
    );
  }
}

export default Home;
