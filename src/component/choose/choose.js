import React, { Component } from 'react';
import CountUp from 'react-countup';
import "./choose.css";





class Choose extends Component {

  render(){
        
      return ( 
          <div className="choose">
                 <div className="row box">


                    <div className="col-md-6 col-sm-12 img-box">
                        <img src="/images/hero_bg_1.jpg" alt="" />
                    </div>

                    <div className="col-md-6 col-sm-12 desc-box">
                        <h2>Why Choose Us</h2>
                        <p className="second">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut tenetur possimus nam totam, repellat expedita ullam amet velit.</p>

                        <div className="d-flex justify-content-between">
                            <div className="increnum  text-center">
                                    <CountUp
                                        className="coun1 coun"
                                        start={0}
                                        end={3}
                                        delay={1.5}
                                        duration={14}
                                        separator=" "
                                    />
                                      <span>K</span>
                                      <p>Happy Customers</p>
                                    </div>
                                    <div className="increnum  text-center">
                                    <CountUp
                                        className="coun2 coun"
                                        start={0}
                                        end={7}
                                        delay={1}
                                        duration={14}
                                        separator=" "
                                    />
                                      <p>Years of Experience</p>
                                    </div>
                                    <div className="increnum  text-center">
                                    <CountUp
                                        className="coun3 coun"
                                        start={0}
                                        end={100}
                                        delay={0.5}
                                        duration={12}
                                        separator=" "
                                    />
                                      <span>%</span>
                                      <p>Satisfaction</p>
                        </div></div>



                    </div>

              </div>
          </div>
    );
  }
}

export default Choose;
