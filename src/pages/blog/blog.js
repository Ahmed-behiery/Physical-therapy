import React, { Component } from 'react';
import Job from "./job";
import Header from "../../component/header/header";
import Sales from "../../component/sales/sales";
import Contact from "../../component/contact/contact";
import Footer from "../../component/footer/footer";




class BlogPage extends Component {
  render(){
    return ( 
     
          <div className="about">

              <Header />
              <Job />
              <Sales />
              <Contact />
              <Footer />
          </div>
    );
  }
}

export default BlogPage;
