import React, { Component } from 'react';
import axios from "axios";
import "./services.css";





class Services extends Component {
    state={
        services: []
    }

    componentDidMount(){
        axios.get("/js/Data.json").then(res => {
            this.setState({ services: res.data.services})
        })
        
    }
  render(){
        const services = this.state.services;
        const servicesBox = services.map(item => { return(
            <div key={item.id} className="col-lg-3 col-sm-6 col-12  box">
                <div className="img-box">
                    <img src={item.img} alt="" />
                 </div>

                <div className="desc-box">
                    <h4>{item.head}</h4>
                    <p>{item.body}</p>
                    <span>{item.link}<i className="fas fa-angle-right"></i></span>
                </div>
            </div> )
        })
      return ( 
          <div className="servicess">
              <div className="container">
                 <div className="row">

                    {servicesBox}

              </div>
          </div>
        </div>
    );
  }
}

export default Services;
