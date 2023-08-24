import { createContext, useContext } from "react";

// CREATE CONTEXT PERMET COMPARTIR INFO ENTRE COMPONENTS

export const authContext = createContext()

// HOOK PER IMPORTAR EL CONTEXT A LES PÀGINES

export const useAuth = () => {
    const context = useContext(authContext);
    if(!context) throw new error ("There is no auth provider")

    return context;
}


export const AuthProvider = ({ children }) => {

    const user = {
        login: true
    }

    return (
        <authContext.Provider value={{ user }}>
            {children}
        </authContext.Provider>
    )
}
