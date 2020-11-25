import React, { useState } from 'react';
import { auth } from '../firebaseConfig';

function Login({ showSignupForm }) {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [authError, setAuthError] = useState(null);

  function onInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const { email, password } = formData;
    if (email && password) {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        setAuthError(null);
      } catch (error) {
        if (error.message) {
          setAuthError(error.message);
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
          <div className="alert alert-danger w-100" role="alert">
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
            <button type="submit">
              Log in
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
