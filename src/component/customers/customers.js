import React, { Component } from 'react';
import SimpleSlider from "./slider";
import "./customers.css";




class Customers extends Component {
  render(){
    return ( 
      
          <div className="customers">
              <div className="container">

                <h2 className="text-center">Happy Customers</h2>
                    <SimpleSlider />

              </div>
          </div>
      
    );
  }
}

export default Customers;
