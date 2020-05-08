import React, { Component } from 'react';
import axios from "axios";
import "./section.css"

class Section extends Component {
    state =  {
        servicesP: []
    }

    componentDidMount(){
        axios.get("/js/Data.json").then(res => {
            this.setState({ servicesP: res.data.servicesP})
            console.log(this.state.servicesP);

        })  
    }

        
  render(){
      const { servicesP } = this.state;
      const listItem = servicesP.map(item => {
          return (
              <div key={item.id} className=" col-lg-3 col-sm-6 col-12">
                  <div className="services-sec">

                      <div className="image-box">
                          <img src={item.img} alt="" />
                      </div>
                      <div className="descc-box">
                          <h4>{item.head}</h4>
                          <p>{item.body}</p>
                          <span>{item.link} <i className="fas fa-chevron-right"></i></span>
                      </div>
                  </div>
              </div>
          )
      })
      
    return ( 
     
          <div className="section">
              <div className="container">
                  <h2>Our Services</h2>
                  <div className="row">
                      {listItem}
                  </div>
              </div>
                        
          </div>
    );
  }
}

export default Section;
