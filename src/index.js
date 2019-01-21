// Set up your application entry point here...

// import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './Root';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico
let initialState = {chatReducer: {messages: [{text: "Hello"}]}};
const store = configureStore(initialState);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
