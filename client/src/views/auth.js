import React, { useState } from 'react';
import Login from '../components/login';
import Signup from '../components/signup';

function Auth() {
  const [toggleForm, setToggleForm] = useState('signup');

  function showLoginForm() {
    setToggleForm('login');
  };

  function showSignupForm() {
    setToggleForm('signup');
  };

  return (
    <section className="authenticate">
      {
        toggleForm === 'login' ?
          <Login
            showSignupForm={showSignupForm} /> :
          <Signup
            showLoginForm={showLoginForm} />
      }
    </section>
  );
}

export default Auth;
