import React, { Component } from 'react';
import History from "./history/history";
import Staff from "./staff/staff";
import Header from "../../component/header/header";
import Sales from "../../component/sales/sales";
import Contact from "../../component/contact/contact";
import Footer from "../../component/footer/footer";




class AboutPage extends Component {
  render(){
    return ( 
     
          <div className="about">

              <Header />
              <History />
              <Staff />
              <Sales />
              <Contact />
              <Footer />
          </div>
    );
  }
}

export default AboutPage;
