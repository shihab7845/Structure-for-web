import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase.inits';
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext("hello world froms mars");

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginWithEmail = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
   useEffect(()=>{
  const Unsubscribe =  onAuthStateChanged(auth,currentUser=>{
        console.log("current user is ",currentUser);        
        setUser(currentUser)
    })
    return ()=>{
        Unsubscribe();
    }

   },[])

  const AuthInfo ={user,createUser,loginWithEmail};
  return (

  <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
}


