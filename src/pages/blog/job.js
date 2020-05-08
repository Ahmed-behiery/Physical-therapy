import React, { Component } from 'react';
import "./job.css";




class Job extends Component {
  render(){
    return ( 
     
          <div className="job">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 col-sm-12 col-12">
                          <div className="row">

                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="card">
                                        <img className="card-img-top" src="/images/img_1.jpg" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Blog post title for Physical Therapy</h5>
                                            <p>by <span>Jeff Sheldon</span>  • May 5th, 2019</p>
                                            <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="card">
                                        <img className="card-img-top" src="/images/img_2.jpg" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Blog post title for Physical Therapy</h5>
                                            <p>by <span>Jeff Sheldon</span>  • May 5th, 2019</p>
                                            <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="card">
                                        <img className="card-img-top" src="/images/img_3.jpg" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Blog post title for Physical Therapy</h5>
                                            <p>by <span>Jeff Sheldon</span>  • May 5th, 2019</p>
                                            <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="card">
                                        <img className="card-img-top" src="/images/img_4.jpg" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title">Blog post title for Physical Therapy</h5>
                                            <p>by <span>Jeff Sheldon</span>  • May 5th, 2019</p>
                                            <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                        </div>
                                    </div>
                                </div>

                          </div>
                      </div>


                      <div className="col-lg-1"></div>

                      <div className="col-lg-3 col-sm-12 col-12 next">

                      <form>
                            <div className="form-group">
                                 <label htmlFor="search">Search</label>
                                 <input className="form-control" type="text" id="search" placeholder="Search Keyword and hit enter..." />
                            </div>
                      </form>
                      <h4>Popular Posts</h4>
                      <ul className="list-unstyled">
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Quaerat rerum voluptatibus veritatis</li>
                          <li>Maiores sapiente veritatis reprehenderit</li>
                          <li>Natus eligendi nobis</li>
                      </ul>
                      <h4>Recent Comments</h4>
                      <ul className="list-unstyled">
                          <li>Hannah <span>in</span> Lorem ipsum dolor sit amet</li>
                          <li>Roger <span>in</span> Quaerat rerum voluptatibus veritatis</li>
                          <li>Hannah <span>in</span> Maiores sapiente veritatis reprehenderit</li>
                          <li>Kim <span>in</span> Natus eligendi nobis</li>
                      </ul>

                          
                      </div>
                  </div>
              </div>
             
          </div>
    );
  }
}

export default Job;
