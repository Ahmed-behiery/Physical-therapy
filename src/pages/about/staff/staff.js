import React, { Component } from 'react';
import "./staff.css";


class Staff extends Component {
  render(){
    return ( 
     
          <div className="staff">

             <div className="container">
                     <h2>Our Staffss</h2>
                     <p className="head"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repudiandae quo, voluptatem possimus inventor.</p>

                 <div className="row">


                     <div className="col-lg-6 col-sm-12 col-12">
                         <div className="st-box">
                             <img src="/images/person_1.jpg" alt="" />
                             <h4>Suzan Horton</h4>
                             <span>therapist</span>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem tempore in consectetur quasi saepe, dicta,
                                asperiores velit repellendus quo optio reiciendis? Accusantium dolorem cupiditate rem, sequi. Ad recusandae voluptatem pariatur?</p>
                         </div>
                     </div>

                     <div className="col-lg-6 col-sm-12 col-12">
                         <div className="st-box">
                             <img src="/images/person_2.jpg" alt="" />
                             <h4>Jonathan Kennedy</h4>
                             <span>therapist</span>
                             <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                         </div>
                     </div>

                     <div className="col-lg-6 col-sm-12 col-12">
                         <div className="st-box">
                             <img src="/images/person_3.jpg" alt="" />
                             <h4>Gordon Meyer</h4>
                             <span>therapist</span>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ea ad dolore illum dignissimos sed provident voluptatem velit exercitationem?
                                Odit consectetur accusamus rerum voluptatibus eos temporibus perferendis harum nulla, ad.</p>
                         </div>
                     </div>

                     <div className="col-lg-6 col-sm-12 col-12">
                         <div className="st-box">
                             <img src="/images/person_4.jpg" alt="" />
                             <h4>Doug Hale Kennedy</h4>
                             <span>therapist</span>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                 Ab ducimus eum eveniet deserunt totam odit itaque necessitatibus numquam doloremque officiis repudiandae ipsum delectus atque magni obcaecati voluptate, ea qui incidunt!</p>
                         </div>
                     </div>
                 </div>
             </div>
          </div>
    );
  }
}

export default Staff;
