import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase_init';

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    
    const AuthInfo ={
        loading,
        createUser

    }



    return (
     <AuthContext value={AuthInfo}>
       {children}
     </AuthContext>
    );
};

export default AuthProvider;