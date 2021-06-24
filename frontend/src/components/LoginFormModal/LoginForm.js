import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from './LoginForm.module.css';
import joint from './jointNoBackGround.png';

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



  if (sessionUser) return <Redirect to="/" />;

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).then(() => <Redirect to="/dashboard"/>)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, newPassword })).then(() => <Redirect to="/dashboard"/>)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
      <>
        <div className={styles.LoginContainer}>
          <p>Already A Member of the Club?</p>
          <p> Log in here</p>
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
              <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>Log In</button>
              </div>  
            </div>
          </form>
        </div>
        <div className="divider" >
          <img src={joint} alt="Joint divider" className={styles.dividerImage}/>
        </div>
       <div className={styles.signupContainer}>
         <p>Looking to join the fastest growing cannabis club?</p> 
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
            <div className={styles.buttonContainer}>
              <button className={styles.submitButton} type="submit">Sign Up</button>
            </div>  
          </form>
        </div>
      </>
    );
}

