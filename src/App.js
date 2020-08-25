import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './components/StateProvider/StateProvider';
import { auth } from './firebase';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Men from './components/AllShoes/Men/Men';
import Women from './components/AllShoes/Women/Women';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';

import MenGym from './components/AllShoes/Men/MenGym/MenGym';
import MenJordan from './components/AllShoes/Men/MenJordan/MenJordan';
import MenRunning from './components/AllShoes/Men/MenRunning/MenRunning';
import MenFootball from './components/AllShoes/Men/MenFootball/MenFootball';
import MenTennis from './components/AllShoes/Men/MenTennis/MenTennis';
import MenBasketball from './components/AllShoes/Men/MenBasketball/MenBasketball';

import WomenTennis from './components/AllShoes/Women/WomenTennis/WomenTennis';
import WomenRunning from './components/AllShoes/Women/WomenRunning/WomenRunning';
import WomenFootball from './components/AllShoes/Women/WomenFootball/WomenFootball';
import WomenBasketball from './components/AllShoes/Women/WomenBasketball/WomenBasketball';
import WomenGym from './components/AllShoes/Women/WomenGym/WomenGym';
import WomenJordan from './components/AllShoes/Women/WomenJordan/WomenJordan';

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);

  console.log('User is >>>', user);

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/men/gym">
            <Header />
            <MenGym />
          </Route>
          <Route path="/men/tennis">
            <Header />
            <MenTennis />
          </Route>
          <Route path="/men/jordan">
            <Header />
            <MenJordan />
          </Route>
          <Route path="/men/running">
            <Header />
            <MenRunning />
          </Route>
          <Route path="/men/football">
            <Header />
            <MenFootball />
          </Route>
          <Route path="/men/basketball">
            <Header />
            <MenBasketball />
          </Route>
          <Route path="/men">
            <Header />
            <Men />
          </Route>


          <Route path="/women/gym">
            <Header />
            <WomenGym />
          </Route>
          <Route path="/women/tennis">
            <Header />
            <WomenTennis />
          </Route>
          <Route path="/women/jordan">
            <Header />
            <WomenJordan />
          </Route>
          <Route path="/women/running">
            <Header />
            <WomenRunning />
          </Route>
          <Route path="/women/football">
            <Header />
            <WomenFootball />
          </Route>
          <Route path="/women/basketball">
            <Header />
            <WomenBasketball />
          </Route>
          <Route path="/women">
            <Header />
            <Women />
          </Route>

          <Route path="/login">
            {/* <Header /> */}
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/" >
            <Header />
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
