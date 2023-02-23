import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";

import { auth, provider } from "../firebase_config"

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

function AuthContextProvider({ children }) {
    const [authLoading, setAuthLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setAuthLoading(false);
            if(!user) return 
            const unsubscribe = setCurrentUser(user)
            return unsubscribe;
        })
    }, []);

    function login() {
        return signInWithPopup(auth, provider)
    }

    function logout(){
        return signOut(auth)
    }

    const stateValue = {
        currentUser,
        login,
        logout,
        useAuth
    }
    return <AuthContext.Provider value={stateValue}>
        {!authLoading && children}
    </AuthContext.Provider>
}

export default AuthContextProvider