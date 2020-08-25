import React, { useState } from 'react';

import './Login.css';
import Wallpaper from './wallpaper.jpg';
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';

const Login = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginAccount = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch(e => alert(e.message));
  };

  const createAccount = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch(e => alert(e.message));
  };

  return (
    <div className="login">
      .
      <div className="login__page">
        <div className="logo">
          <img className="login__logo" src="https://seeklogo.net/wp-content/uploads/2013/11/nike-swoosh-vector-logo-400x400.png"  alt="Nike logo" />
        </div>
        <span className="login__head1">Get News and Offers from Nike</span>
        <form>
          <span className="login__email">Email Address:</span>
          <input 
            value={email} 
            onChange={event => setEmail(event.target.value)}
            className="login__input" 
            type="email" 
            placeholder="Email" 
            required 
          />
          <span className="login__password">Password:</span>
          <input 
            value={password} 
            onChange={event => setPassword(event.target.value)}
            className="login__input" 
            type="password" 
            placeholder="Password" 
            required 
          />
          <button className="login__button" type="submit" onClick={loginAccount} >Login</button>
          <span className="login__head2">Sign Up for emails to get special news and offers from the Nike family of brands</span>
          <button className="login__button" type="submit" onClick={createAccount} >Create your Account</button>
          <span className="login__head3">By signing up, you agree to Nike's <span className="underlineHead3">Privacy Policy</span> and <span className="underlineHead3">Terms of Use</span></span>
        </form>
      </div>
      .
    </div>
  );
}

export default Login;