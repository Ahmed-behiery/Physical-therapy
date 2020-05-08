import React, { Component } from 'react';
import axios from "axios";
import "./info.css";





class Info extends Component {
    state={
        info: []
    }

    componentDidMount(){
        axios.get("/js/Data.json").then(res => {
            this.setState({ info: res.data.info})
        })
        
    }
  render(){
        const info = this.state.info;
        const infoBox = info.map(item => { return(
            <div key={item.id} className="col-lg-3 col-sm-6  bo">
                <div className="icon-bo col-lg-12   float-left text-center">
                    <i className={item.icon_name}></i>
                 </div>

                <div className="desc-bo col-lg-12 float-right text-center">
                    <p>{item.title}</p>
                    <span>{item.body}</span>
                </div>
            </div> )
        })
      return ( 
          <div className="info">
              <div className="container">
                 <div className="row">

                    {infoBox}

              </div>
          </div>
          <div className="clearfix"></div>
        </div>
    );
  }
}

export default Info;
