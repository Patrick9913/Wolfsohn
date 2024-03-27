import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


const UserContext = createContext()

const UserProvider = ({children}) => {

    const [ user, setUser ] = useState({
        email: null,
        userId: null,
        log: false
    });

    const Login = async(values) => {
        try {
            await signInWithEmailAndPassword ( auth, values.email, values.password )

            setUser({
                email: user.email,
                userId: user.uid,
                log:true
            })
        } catch (error) {

            setUser({
                email: null,
                userId: null,
                log:false
            })
        }
    }
    
    const Register = async (values) => {

            await createUserWithEmailAndPassword ( auth, values.email, values.password )

    }

    const Logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    userId: user.uid,
                    log: true
                })
            } else {
                setUser({
                    email: null,
                    userId: user.uid,
                    log: false
                })
            }
        })
    }, [])

    return (
        <UserProvider.Provider value={{ user, Login, Register, Logout }}>
            {children}
        </UserProvider.Provider>
    )
}