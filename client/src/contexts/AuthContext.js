import { createContext, useState, useContext } from "react";
import * as AuthService from "../services/request";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage("auth", {});

    const onLoginSubmit = async (values) => {
        const result = await AuthService.post("/users/login", values);
        setAuth(result);
    };

    const onRegisterSubmit = async (values) => {
        const { username, password, repassword } = values;
        if (password !== repassword) {
            return console.log("passwords missmatch");
        }

        await AuthService.post("/users/register", { username, password });
        onLoginSubmit(values);
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
