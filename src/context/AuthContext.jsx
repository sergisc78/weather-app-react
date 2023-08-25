import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext } from "react";
import { auth } from "../firebase/firebase";



// CREATE CONTEXT PERMET COMPARTIR INFO ENTRE COMPONENTS

export const authContext = createContext()

// HOOK PER IMPORTAR EL CONTEXT A LES PÀGINES

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new error("There is no auth provider")

    return context;
}

export const AuthProvider = ({ children }) => {


    // FIREBASE 

    const singup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    return (
        <authContext.Provider value={{ singup }}>
            {children}
        </authContext.Provider>
    )
}
