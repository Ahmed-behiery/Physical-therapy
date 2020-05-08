import React, { Component } from 'react';
import Header from "../../component/header/header";
import Choose from "../../component/choose/choose";
import Customers from "../../component/customers/customers";
import Sales from "../../component/sales/sales";
import Contact from "../../component/contact/contact";
import Footer from "../../component/footer/footer";
import Section from "./section";


class ServicesPage extends Component {
  render(){
    return ( 
     
          <div className="servicesP">
            
              <Header />   
              <Section />  
              <Choose />
              <Customers />
              <Sales />
              <Contact />
              <Footer />           
          </div>
    );
  }
}

export default ServicesPage;
