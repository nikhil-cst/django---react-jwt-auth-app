import { createContext, useContext, useState } from "react";
var CryptoJS = require('crypto-js')

const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{
    const [authenticated, setauthenticated] = useState(null)

    var ciphertext = (data) => CryptoJS.AES.encrypt(JSON.stringify(data), 'secret@cst.com').toString()
    var bytes = (data) => CryptoJS.AES.decrypt(data, 'secret@cst.com')
    var decryptedData = (data) => JSON.parse(data.toString(CryptoJS.enc.Utf8))

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
        // localStorage.setItem('auth', JSON.stringify(data))
        localStorage.setItem('auth', ciphertext(data))
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