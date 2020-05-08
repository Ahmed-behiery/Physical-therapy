import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
        };
    return (
      <div className="slid">
        <Slider {...settings}>

          <div className="card" >
                  <img className="card-img-top" src="/images/person_1.jpg" alt="Card  cap" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Mia Johnson</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content
                                              far from the countries Vokalia and Consonantia..</p>
                  </div>
              </div>
              <div className="card" >
                  <img className="card-img-top" src="/images/person_2.jpg" alt="Card  cap" />
                  <div className="card-body">
                    <h5 className="card-title text-center"> Stef Jobs</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content
                                              far from the countries Vokalia and Consonantia..</p>
                  </div>
              </div>
              <div className="card" >
                  <img className="card-img-top" src="/images/person_3.jpg" alt="Card  cap" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Mark Hans</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content
                                              far from the countries Vokalia and Consonantia..</p>
                  </div>
              </div>
              <div className="card" >
                  <img className="card-img-top" src="/images/person_4.jpg" alt="Card  cap" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Rakel Hers</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content
                                              far from the countries Vokalia and Consonantia..</p>
                  </div>
              </div>
              <div className="card" >
                  <img className="card-img-top" src="/images/person_5.jpg" alt="Card  cap" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Adams Jobs</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content
                                              far from the countries Vokalia and Consonantia..</p>
                  </div>
              </div>
              <div>
              <div className="card" >
                  <img className="card-img-top" src="/images/person_3.jpg" alt="Card  cap" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Luka Johnson</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content
                                              far from the countries Vokalia and Consonantia..</p>
                  </div>
              </div>
          </div>
        </Slider>
      </div>
    );
  }
}