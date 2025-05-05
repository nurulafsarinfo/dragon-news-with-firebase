import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
 


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    console.log('user is :', user);

    // log in / sign in 
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // log out / sign out 
    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
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
        logOut,
    }


    return <AuthContext.Provider value={authData}> {children} </AuthContext.Provider>
};

export default AuthProvider;