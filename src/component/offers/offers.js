import React, { Component } from 'react';
import "./offers.css";





class Offers extends Component {

  render(){
        
      return ( 
          <div className="offers">
              <div className="container">
                  <h2>Our Special Offers</h2>
                 <div className="row boxo">

                    <div className="col-md-3 col-sm-6 des-box">
                        <h5>Physical Therapy</h5>
                        <p className="first">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, unde!</p>
                        <button>Learn More</button>
                    </div>

                    <div className="col-md-3 col-sm-6 image-box">
                        <img src="/images/img_1.jpg" alt="" />
                    </div>

                    <div className="col-md-3 col-sm-6 des-box">
                        <h5>Massage Therapy</h5>
                        <p className="second">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, unde!</p>
                        <button>Learn More</button>
                    </div>

                    <div className="col-md-3 col-sm-6 image-box">
                        <img src="/images/img_2.jpg" alt="" />
                    </div>

                    <div className="col-md-3 col-sm-6 image-box">
                        <img src="/images/img_3.jpg" alt="" />
                    </div>

                    <div className="col-md-3 col-sm-6 des-box">
                        <h5>Chiropractic Therapy</h5>
                        <p className="third">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, unde!</p>
                        <button>Learn More</button>
                    </div>

                    <div className="col-md-3 col-sm-6 image-box">
                        <img src="/images/img_4.jpg" alt="" />
                    </div>

                    <div className="col-md-3 col-sm-6 des-box">
                        <h5>Chiropractic Therapy</h5>
                        <p className="fourth">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, unde!</p>
                        <button>Learn More</button>
                    </div>

                    


              </div>
          </div>
        </div>
    );
  }
}

export default Offers;
