import React, { Component } from 'react';
import "./history.css";

class History extends Component {
  render(){
    return ( 
     
          <div className="history">

            <div className="container">
              <div className="row">
                        <div className="col-lg-6 col-sm-12 col-12">
                            <div className="his-img">
                            <img src="/images/img_1.jpg" alt="" />
                            </div>
                        </div>
                            
                        <div className="col-lg-6 col-sm-12 col-12">
                            <div className="his-des fir">
                                <h2>About Our History</h2>
                                <p className="first">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptates a explicabo delectus sed labore dolor enim optio odio at!</p>
                                <p className="second">Adipisci dolore reprehenderit est et assumenda veritatis, ex voluptate odio consequuntur quo ipsa accusamus dicta laborum exercitationem aspernatur reiciendis perspiciatis!</p>
                                <p className="third">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam voluptates a explicabo delectus sed labore dolor enim optio odio at!</p>
                            </div>
                        </div>
                            
                        <div className="col-lg-6 col-sm-12 col-12">
                            <div className="his-img">
                                <img src="/images/img_3.jpg" alt="" />
                            </div>
                        </div>
                            
                        <div className="col-lg-6 col-sm-12 col-12">
                            <div className="his-des">
                                <p>Adipisci dolore reprehenderit est et assumenda veritatis, ex voluptate odio consequuntur quo ipsa accusamus dicta laborum exercitationem aspernatur reiciendis perspiciatis!</p>
                                <div>
                                <i className="fas fa-check"></i>   <span>Adipisci dolore reprehenderit</span>
                                </div>
                                <div>
                                    <i className="fas fa-check"></i> <span>Accusamus dicta laborum</span>
                                </div>
                                <div>
                                    <i className="fas fa-check"></i> <span>Delectus sed labore</span>
                                </div>
                            
                            </div>
                        </div>
                    </div>


              </div>
          </div>
    );
  }
}

export default History;
