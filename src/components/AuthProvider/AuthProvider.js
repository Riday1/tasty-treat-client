import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from '../../firebaseConfig/firebaseConfig';




const githubProvider = new GithubAuthProvider();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {



    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        localStorage.removeItem('genius-car')
        return signOut(auth)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const updateUser = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })

    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const changePassword = (newPassword) => {
        return updatePassword(auth.currentUser, newPassword)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser?.emailVerified === true || currentUser === null) {
                setUser(currentUser)
            }
            setLoading(false)
        });
        return () => unSubscribe()
    }, [loading])





    const authInfo = { user, signIn, createUser, logOut, verifyEmail, updateUser, signInWithGoogle, signInWithGithub, setUser, loading, changePassword, darkMode, setDarkMode, forgetPassword }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;