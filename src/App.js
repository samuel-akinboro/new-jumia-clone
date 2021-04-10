import React, { useEffect } from 'react';
import './App.css'
import Home from './Home';
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from './components/Cart';
import Login from './components/Login';
import { auth } from './Firebase'
import { useStateValue } from './StateProvider';
import SellProduct from './components/SellProduct';
import './Firebase'
import './Promise'
import redux from './playground/redux-101'


const App = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // check if user is logged in or was logged in
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/cart">
              <Header />
              <Cart />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/sell-product">
              <Header />
              <SellProduct />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App