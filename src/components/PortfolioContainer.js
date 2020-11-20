import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Footer from "../components/Footer/index";
import Header from "../components/Header/index"

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {

    // WRAP the routes in a switch component to avoid rendering multiple paths per route
    // Switch will return the first route that matches

    return <Switch>
      {/* routes are assigned path and component values */}
      {/* BUT links no longer work, so we have to use NavLink in NavTabs */}

      <Route exact path="/about" component={About} />      
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/home" component={Home} />
      <Redirect to="/home" />

      {/* default route does NOT specify a path */}
      {/* BUT it will render everything, including two routes at once */}
      {/* <Route component={Home} /> */}
        
    </Switch>
  };

  render() {
    return (
      <div className="container">
        {/* WRAP the entire application in a <Router /> component */}
        <Router>

          <Header />

          <NavTabs
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}

          <Footer />

        </Router>        
      </div>
    );
  }
}

export default PortfolioContainer;
