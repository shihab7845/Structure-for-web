import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import auth from '../firebase.inits';

export default function Navigation() {
  const { user } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out successfully');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              aria-label="Toggle menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a href="#">Item 1</a></li>
              <li>
                <a href="#">Parent</a>
                <ul className="p-2">
                  <li><a href="#">Submenu 1</a></li>
                  <li><a href="#">Submenu 2</a></li>
                </ul>
              </li>
              <li><a href="#">Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">SHIHAB7845</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex justify-evenly items-center border border-red-600 px-4 py-2 bg-gray-100 shadow-md rounded-md space-x-4 sm:space-x-12 md:space-x-24">
            <Link to="/" className="text-blue-500 hover:text-blue-700 font-medium">
              Home
            </Link>
            {/* <Link to="/login" className="text-blue-500 hover:text-blue-700 font-medium">
              Login
            </Link> */}
            <Link to="/registration" className="text-blue-500 hover:text-blue-700 font-medium">
              Registration
            </Link>
            <Link to="/order" className="text-blue-500 hover:text-blue-700 font-medium">
              Order
            </Link>
            {user ? (
              <button onClick={handleSignOut} className="text-blue-500 hover:text-blue-700 font-medium">
                Log Out
              </button>
            ) : (
              <Link to="/login" className="text-blue-500 hover:text-blue-700 font-medium">
                Log In
              </Link>
            )}
          </div>
        </div>
        <div className="navbar-end">
          {user && user.displayName ? (
            <span className="text-blue-500 font-medium">{user.displayName}</span>
          ) : (
            <Link to="/registration" className="btn btn-primary">
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
