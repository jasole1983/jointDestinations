import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, newPassword }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div id="entire-container" >
      <div id="left-half-div">
        <form onSubmit={handleLogin} method="post" action="/login" className={styles.formContainer}>
          <ul className={styles.errorList}>
            {errors.map((error, idx) => (
            <li className={styles.errorItem} key={idx}>{error}</li>
              ))}
          </ul>
          <div>
            <div className={styles.inputdiv}>
              <input
                className={styles.input}
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                placeholder="Username or Email"
                required
              />
            </div>
            <div className={styles.inputdiv}>
              <input
                className={styles.input}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>Log In</button>
          </div>
        </form>
      </div>
      <div id="right-half-div">
       
          <form onSubmit={handleSubmit} method={'post'} action="/signup" className={styles.formContainer} id={styles.signups}>
            <ul className={styles.errList}>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className={styles.inputdiv}>
              <input
                className={styles.input}
                type="text"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className={styles.inputdiv}>
              <input
                type="text"
                className={styles.input}
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputdiv}>
              <input
                type="password"
                className={styles.input}
                placeholder="Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputdiv}>
              <input
                type="password"
                className={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button className={styles.submitButton} type="submit">Sign Up</button>
          </form>
        
      </div>
    </div>  
  );
}

