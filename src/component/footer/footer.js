import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"


class Footer extends Component {
  render(){
    return ( 
     
          <div className="footer">
            
            <div className="container">
                <p className="text-center">Copyright 	&copy;2020 All rights reserved | This template is made with <i className="fas fa-heart"></i>  by<Link to="/"> Colorlib </Link></p>
            </div>
          </div>
    );
  }
}

export default Footer;
