import React, { useReducer } from "react";

import 'babel-polyfill';

import styles from './App.css'
//route
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//
// import NProgress from 'nprogress'

// Router.onRouteChangeStart = () => NProgress.start()
// Router.onRouteChangeComplete = () => NProgress.done()
// Router.onRouteChangeError = () => NProgress.done()

import ContextProvider from './store/context/contextProvider'

//oartials
import Header from './pages/partials/header/Header'

//pages
import ProductsList from './pages/products/productsList/ProductsList'
import SingleProduct from './pages/products/singleProduct/SingleProduct'

const App = () => {

  return (
    <div>
        <ContextProvider>
          <Router>
            <Header />
              <Switch>
                {/* <Route path="/single/:id/:img" component={ Single }/> */}
                <Route path="/product/:singleId" component={ SingleProduct }/>
                <Route path="/" component={ ProductsList }/>
                <Route component={ ProductsList }/>
              </Switch>
          </Router>
        </ContextProvider>
    </div>
  );
};

export default App; 
