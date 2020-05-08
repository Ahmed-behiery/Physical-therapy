import React, { Component } from 'react';
import Typing from "./typing";
import { fadeIn } from 'react-animations';
import "./header.css";




class Header extends Component {

  

  stylee ={
    color: "#E55171"
  }
  render(){
    return ( 
     
      
          <div className="header">

                    <div className="backk animated fadeIn">
                    <div className="overlayy ">
                        <div className="boxx ">

                               <h1 className="titlee animated fadeInUp"> We give solutions to your  </h1>  

                          <Typing /> 
                          <button>Get Started</button>
                        </div>
                        
                       
                
                     </div>
                </div>

              
          </div>
      
    );
  }
}

export default Header;
