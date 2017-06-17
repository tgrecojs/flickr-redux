import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import configureStore from './configureStore';
import  {devToolsEnhancer} from 'redux-devtools-extension';
const store = configureStore(devToolsEnhancer());
import * as Actions from './features/gallery/state/reducer';
import { Router, Route, hashHistory } from 'react-router'
/// import AllImagesComponent from './features/gallery/components/allImages.js'
import FeaturedGallery from './pages/featuredGallery'
import FullGallery from './pages/home'

import ContactForm from './ContactForm'
const example = () => <h2>Example!!!!!</h2>
ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
  <Route component={App} >
    <Route component={FullGallery} path="/" />
  <Route component={FeaturedGallery} path="/featured" />
  <Route component={ContactForm} path="/contact" />
  </Route>
 </Router>
  </Provider>,
  document.getElementById('root')
);
