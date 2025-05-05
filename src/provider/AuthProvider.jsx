/* eslint-disable react-refresh/only-export-components */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
 


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // log in / sign in 
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }


    // log out / sign out 
    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
             unSubscriber();
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        logIn,
        updateUser,
        logOut,
        loading,
        setLoading,
    }


    return <AuthContext.Provider value={authData}> {children} </AuthContext.Provider>
};

export default AuthProvider;