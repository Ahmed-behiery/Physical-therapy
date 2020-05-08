import React, { Component } from 'react';
import Form from "./form";
import Header from "../../component/header/header";
import Sales from "../../component/sales/sales";
import Contact from "../../component/contact/contact";
import Footer from "../../component/footer/footer";




class ContactPage extends Component {
  render(){
    return ( 
     
          <div className="contact">

              <Header />
              <Form />
              <Sales />
              <Contact />
              <Footer />
          </div>
    );
  }
}

export default ContactPage;
