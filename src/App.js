/* eslint-disable import/no-named-as-default */
import {Route, Switch} from "react-router-dom";

import AboutPage from "./home/AboutPage";
import HomePage from "./home/HomePage";
import PropTypes from "prop-types";
import React from "react";
import {hot} from "react-hot-loader";
import Header from "./common/Header";
import ChatPage from "./chat/ChatPage";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
              integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"/>
        <div>
          <Header/>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/chat" component={ChatPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
