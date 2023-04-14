import { createContext, useState, useContext } from "react";
import * as AuthService from "../services/request";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage("auth", {});

    const onRegisterSubmit = async (values) => {
        await AuthService.post("/users/register", values);
    };
    const onLoginSubmit = async (values) => {
        const result = await AuthService.post("/users/login", values);
        setAuth(result);
        console.log(auth);
    };
    const contextValues = { onRegisterSubmit, onLoginSubmit, auth };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};
