import React, { useState } from 'react';
import { auth } from '../firebaseConfig';

function Signup({ showLoginForm }) {
  const [formData, setFormData] = useState({
    username: '',
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

    const { username, email, password } = formData;
    if (username && email && password) {
      try {
        auth.createUserWithEmailAndPassword(email, password)
          .then(function (result) {
            setAuthError(null);
            return result.user.updateProfile({
              displayName: username
            })
          }).catch(function (error) {
            if (error.message) {
              setAuthError(error.message);
            }
          })
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
        <h5 className="display-4">Create a New Account</h5>
        <form
          onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">USERNAME</label>
            <input
              className="mb-2"
              type="text"
              name="username"
              id="username"
              minLength="3"
              required="required"
              value={formData.username}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              className="mb-2"
              type="email"
              name="email"
              id="email"
              required="required"
              value={formData.email}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">PASSWORD</label>
            <input
              className="mb-2"
              type="password"
              name="password"
              minLength="5"
              id="password"
              required="required"
              value={formData.password}
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">
              REGISTER
            </button>
          </div>
          <div className="form-register">
            <span>
              Have an account?
              <strong
                onClick={showLoginForm}>
                Login </strong>
            </span>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Signup;
