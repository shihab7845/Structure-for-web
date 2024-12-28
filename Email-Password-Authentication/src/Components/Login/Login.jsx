import React, { useRef, useState } from 'react';
import auth from '../../firebase.inits';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default function Login() {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    console.log(emailValue, passwordValue);

    setError('');
    setSuccess('');

    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((result) => {
        const user =  result.user;
        console.log(user);
        if(!user.emailVerified){
          alert("check your email for varification ")
        }else{
          setSuccess('Successfully logged in to your account.');
        }
        
      })
      .catch((error) => {
        console.error(error.code, error.message);
        setError(error.message || 'Failed to log in. Please try again.');
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setError('');
    setSuccess('');

    if (!email) {
      setError('Please enter an email address.');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccess('Check your email for password reset instructions!');
      })
      .catch((error) => {
        console.error(error.code, error.message);
        setError(error.message || 'Failed to send password reset email. Please try again.');
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Welcome back! Please log in to access your account and manage your preferences, track your orders, and stay updated with the latest features. Your security and privacy are our top priorities.
          </p>
          <div>
            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-600">{error}</p>}
          </div>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                ref={passwordRef}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <button
                  type="button"
                  onClick={handleResetPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <small className="opacity-60">
              New here? <Link className="underline" to="/registration">Register</Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}
