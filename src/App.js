import React from 'react';
import './App.css'
import Home from './Pages/Home/Home';
import Header from './components/ConstantComponent/Header/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from './components/Cart';
import Login from './Pages/Login/Login';
// import { auth } from './Firebase'
// import { useStateValue } from './StateProvider';
import SellProduct from './components/SellProduct/SellProduct';
import './Firebase'


const App = () => {
  // const [ dispatch ] = useStateValue();
  // useEffect(() => {
  //   auth.onAuthStateChanged(authUser => {
  //     // check if user is logged in or was logged in
  //     if (authUser) {
  //       dispatch({
  //         type: 'SET_USER',
  //         user: authUser
  //       })
  //     } else {
  //       dispatch({
  //         type: 'SET_USER',
  //         user: null
  //       })
  //     }
  //   })
  // }, [])

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