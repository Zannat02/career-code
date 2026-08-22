import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase_init';
import { GoogleAuthProvider } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    const signInWithGoogle =() =>{
           setLoading(true);
           return signInWithPopup(auth, googleProvider);
    }

    const signOutUser =() =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log('user in the auth state change', currentUser)
        })
        return () =>{
            unSubscribe();
        }
    })

    
    const AuthInfo ={
        loading,
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser

    }



    return (
     <AuthContext value={AuthInfo}>
       {children}
     </AuthContext>
    );
};

export default AuthProvider;