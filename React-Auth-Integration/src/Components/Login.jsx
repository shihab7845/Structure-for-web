import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function Login() {

  const {loginWithEmail} = useContext(AuthContext)


    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password =  e.target.password.value;
        console.log(email,password);

        loginWithEmail(email,password)
        .then((result)=>{
          const user =  result.user;
          console.log(user);          
        })
        .catch((error)=>{
          console.log(error.message);         
        })
        
    }

  return (
    <main>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  aria-label="Email"
                  name='name'
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  aria-label="Password"
                  name='password'
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
