import React, { useState, useRef } from 'react';
import { auth } from '../firebaseConfig';

function Login({ showSignupForm }) {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [authError, setAuthError] = useState(null);
  const buttonRef = useRef();

  function onInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    buttonRef.current.disabled = true;
    buttonRef.current.firstElementChild.style.display = "block";

    const { email, password } = formData;
    if (email && password) {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        setAuthError(null);
        buttonRef.current.disabled = false;
        buttonRef.current.firstElementChild.style.display = "none";
      } catch (error) {
        if (error.message) {
          setAuthError(error.message);
          buttonRef.current.disabled = false;
          buttonRef.current.firstElementChild.style.display = "none";
        }
      }
    } else {
      return
    }

  }

  return (
    <section className="form">
      {authError ?
        (
          <div className="alert alert-danger w-100 text-center" role="alert">
            <strong className="h4">{authError}</strong>
          </div>
        )
        : null}
      <section className="form">
        <h5 className="display-4">Log in</h5>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              className="mb-2"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={onInputChange}
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">PASSWORD</label>
            <input
              className="mb-2"
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={onInputChange}
              required="required"
            />
          </div>
          <div className="form-group">
            <button
              ref={buttonRef}
              type="submit">
              Log in
              <div className="css-loader"></div>
            </button>
          </div>
          <div className="form-register">
            <span>
              Don't have an account?
              <strong onClick={showSignupForm}>
                register
                </strong>
            </span>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Login;
