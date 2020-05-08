import React, { Component } from 'react';
import { BrowserRouter, Switch, Route  } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Home from "./component/home";
import ServicesPage from "./pages/services/services";
import AboutPage from "./pages/about/about";
import BlogPage from './pages/blog/blog';
import ContactPage from "./pages/contact/contactus";
import ExampleWithRefs from "./loading";












class App extends Component {
  componentDidMount(){}
  render(){
    return ( 
      <BrowserRouter>
          <div className="App">
            
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/services" component={ServicesPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/blog" component={BlogPage} />
                    <Route exact path="/contactus" component={ContactPage} />
               </Switch>

          <ExampleWithRefs />


            
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
