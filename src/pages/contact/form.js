import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "./form.css"




class Form extends Component {
  render(){
    return ( 
     
          <div className="form-box">

              <div className="container">
                  <div className="row">
                      <div className="col-lg-7 col-12">

                     <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>

                        <div className="message">

                          <form>
                                <div className="form-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" className="form-control" id="firstname"  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" className="form-control" id="lastname" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mail">Email address</label>
                                    <input type="email" className="form-control" id="mail" aria-describedby="emailHelp"  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control" id="subject"  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Message">Message</label>
                                    <textarea type="textarea" className="form-control" id="Message" placeholder="Write your note or question here..." />
                                </div>
                                <button>Send Message</button>
                          </form>
                          </div>
                   </ScrollAnimation>

                      </div>

                      <div className="col-lg-5 col-12">
                          
                            <div className="details">
                                <div className="address">
                                    <h4>Address</h4>
                                    <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                                    <h4>Phone</h4>
                                    <span>+1 232 3235 324</span>
                                    <h4>Email Address</h4>
                                    <span>youremail@domain.com</span>

                                </div>
                                <div className="more">
                                    <h4>More Info</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur.
                                        Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.</p>
                                    <button>Learn More</button>
                                </div>
                            </div>

                      </div>
                  </div>
              </div>

          </div>
    );
  }
}

export default Form;
