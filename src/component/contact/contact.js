import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./contact.css";








class Contact extends Component {
  render(){
    return ( 
    
          <div className="contactt">
              <div className="container">
                 <div className="row">

                     <div className="col-lg-2 col-6 box">
                         <h5>Quick Links</h5>
                         <ul className="list-unstyled">
                             <li><Link to="/" > About Us </Link></li>
                             <li><Link to="/" > Services </Link></li>
                             <li><Link to="/" > Testimonials </Link></li>
                             <li><Link to="/" > Contact US </Link></li>
                         </ul>
                     </div>
                     <div className="col-lg-2 col-6 box">
                         <h5>Products</h5>
                         <ul className="list-unstyled">
                             <li><Link to="/" > About Us </Link></li>
                             <li><Link to="/" > Services </Link></li>
                             <li><Link to="/" > Testimonials </Link></li>
                             <li><Link to="/" > Contact US </Link></li>
                         </ul>
                     </div>
                     <div className="col-lg-2 col-6 box">
                         <h5>Features</h5>
                         <ul className="list-unstyled">
                             <li><Link to="/" > About Us </Link></li>
                             <li><Link to="/" > Services </Link></li>
                             <li><Link to="/" > Testimonials </Link></li>
                             <li><Link to="/" > Contact US </Link></li>
                         </ul>
                     </div>
                     <div className="col-lg-3 col-6 box">
                         <h5>Follow US</h5>
                         <Link to="/"><i className="fab fa-facebook-f fa-2x face"></i></Link>
                         <Link to="/"><i className="fab fa-twitter fa-2x twitter"></i></Link>
                         <Link to="/"><i className="fab fa-instagram fa-2x insta"></i></Link>
                         <Link to="/"><i className="fab fa-linkedin-in fa-2x linked"></i></Link>
                         
                     </div>
                     <div className="col-lg-3 col-12 box">
                        <h5>Subscribe Newsletter</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <form>
                            <input type="email" placeholder="Enter E-mail" />
                            <button>Send</button>
                        </form>
                     </div>


                  </div>
              </div>            
          </div>
      
    );
  }
}

export default Contact;
