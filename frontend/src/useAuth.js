import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{
    const [authenticated, setauthenticated] = useState(null)

    const login = (details) =>{
        let data = {
            userId: details.userId,
            firstName: details.firstName,
            lastName: details.lastName,
            email: details.email,
            accessToken: details.accessToken,
            refreshToken: details.refreshToken,
        }
        setauthenticated(data)
        localStorage.setItem('auth', JSON.stringify(data))
    }

    const logout = () =>{
        setauthenticated(null)
        localStorage.removeItem('auth')
    }

    return (
        <AuthContext.Provider value={{ authenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}