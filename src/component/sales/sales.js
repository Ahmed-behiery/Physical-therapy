import React, { Component } from 'react';
import "./sales.css";




class Sales extends Component {
  render(){
    return ( 
      
          <div className="sales">
              <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <h3>Upto 30% Discount for The First Commers</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                             <button>Contact US</button>
                        </div>
                    </div>
                </div>

          </div>
      
    );
  }
}

export default Sales;
