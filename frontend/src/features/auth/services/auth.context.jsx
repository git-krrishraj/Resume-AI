/**
 * this is the state layer which allows us to manage the authentication state of the user across the application. It provides a context that can be consumed by any component that needs to access or modify the authentication state. This context includes functions for logging in, logging out, and checking the current authentication status, as well as storing user information on frontend and authentication tokens.and managing loading status
 */
import { getMe } from "./auth.api";
import { useContext, createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getAndSetUser = async () => {
            try {
                const data = await getMe()
                setUser(data.user)
            }
            catch (err) {
                console.log(err)
            }
            finally {
                setLoading(false)
            }
        }

        getAndSetUser()

    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}