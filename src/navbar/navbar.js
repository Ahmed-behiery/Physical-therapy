import React, { Component } from 'react';
import {  NavLink } from "react-router-dom";
import ExampleWithRefs from "../loading";
import "./navbar.css";




class Navbar extends Component {

  state = {
    loadingBarProgress: 0
  }


  complete = () => {
        this.setState({ loadingBarProgress: 100 })
  }

  onLoaderFinished = () => {
    this.setState({ loadingBarProgress: 0 });
  };


  render(){
    return (
        <div className="Navbar">
          <nav className="navbar navbar-expand-lg navbar-dark ">
                  <div className="container  nnavbar">

                  <div className="logo mr-5">
                     <NavLink className="navbar-brand bb" to="/">PhysicalTherapy<span>.</span></NavLink>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                  </div>


              <div className="navi">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav ">
                  <NavLink className="nav-item nav-link mr-5" activeClassName="selected" exact to="/" onClick={this.complete} > Home <span class="sr-only">(current)</span> </NavLink>
                
                
                  <li className="nav-item dropdown">
                        <NavLink  to="/services"  className="nav-item nav-link mr-5" activeClassName="selected" id="dropdownMenu"  aria-haspopup="true" aria-expanded="false" onClick={this.complete} > Services 
                        </NavLink>


                        <div className="dropdown-menu dropd" aria-labelledby="dropdownMenu">
                          <NavLink className="dropdown-item" to="/"  > Physical Therapy</NavLink>

                          <NavLink  className="dropdown-item" to="/" > Massage Therapy</NavLink>

                          <NavLink className="dropdown-item" to="/" > ChoroPractic Therapy</NavLink>
                        </div>
                  </li>


                  <NavLink className="nav-item nav-link mr-5" to="/about" activeClassName="selected" onClick={this.complete}>About</NavLink>
                  <NavLink className="nav-item nav-link mr-5" to="/blog" activeClassName="selected" onClick={this.complete}>Blog</NavLink>
                  <NavLink className="nav-item nav-link mr-5" to="/contactus" activeClassName="selected" onClick={this.complete}>Contact</NavLink>
                  </div>
              </div>

            </div>
          </div>
       </nav>
       <ExampleWithRefs loadingBarProgress={this.state.loadingBarProgress}  onLoaderFinished={this.onLoaderFinished} />


      </div>
);
  }
}

export default Navbar;
