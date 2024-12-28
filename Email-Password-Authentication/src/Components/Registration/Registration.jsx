import React, { useState } from 'react';
import auth from '../../firebase.inits';
import { createUserWithEmailAndPassword,sendEmailVerification,updateProfile } from 'firebase/auth';
import { AiFillEyeInvisible } from "react-icons/ai";
import { RxEyeOpen } from "react-icons/rx";
import { Link } from 'react-router-dom';

export default function Login() {
  const [errorText, setErrorText] = useState('');
  const [success, setSuccess] = useState('');
  const [visible, setvisible] = useState(false);

  const handlevisit = () => {
    setvisible(!visible)
    return
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailvalue = e.target.email.value;
    const namevalue = e.target.name.value;
    const passwordvalue = e.target.password.value;
    const check = e.target.terms.checked;
    console.log(check);

    if (!check) {
      setErrorText("accept our terms and condition before submit")
      return
    }

    if (passwordvalue.length < 6) {
      setErrorText("password must be more then 6 character !");
      return
    }
    const regex = /[A-Z]/;
    if (!(regex.test(passwordvalue))) {
      setErrorText("you should use at least one uppercase character ");
    }

    createUserWithEmailAndPassword(auth, emailvalue, passwordvalue)
      .then((result) => {
        const user = result.user;
        console.log(user);

        updateProfile(user,{displayName:namevalue})
        .then()
        .catch()

        sendEmailVerification(user)
          .then(() => setSuccess('Account created successfully!'))
          .catch((error) => {
            console.log(error);
            const errormessage = error.message;
            setErrorText(errormessage);
          })

        setErrorText('');
      })
      .catch((error) => {
        console.log(error);
        const errormessage = error.message;
        setErrorText(errormessage);
        setSuccess('');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Register Here</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email here"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name here"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type={visible ? "text" : "password"}
              name="password"
              placeholder="Enter your password here"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Password"
            />
            <span onClick={handlevisit} className="cursor-pointer px-2 text-blue-500" role="button" aria-label="Toggle password visibility">
              {visible ? <RxEyeOpen /> : <AiFillEyeInvisible />

              }
            </span>
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-center space-x-2">
            <input type="checkbox" name="terms" className="form-checkbox" />
            <p className='text-black '>Accept our terms and conditions</p>
          </div>


        </form>
        <small className='text-black opacity-60'>Already have an account <Link className='underline' to='/login'>Login</Link> </small>

        <div className="mt-4">
          {errorText && <p className="text-red-500">{errorText}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </div>
      </div>
    </div>
  );
}
