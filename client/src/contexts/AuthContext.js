import { createContext, useState, useContext } from "react";
import * as AuthService from "../services/request";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const onRegisterSubmit = async (values) => {
        await AuthService.post("/users/register", values);
    };
    const onLoginSubmit = async (values) => {
        const token = await AuthService.post("/users/login", values);
        console.log(token);
    };
    const contextValues = { onRegisterSubmit, onLoginSubmit };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};
