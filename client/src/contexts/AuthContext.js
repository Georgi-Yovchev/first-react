import { createContext, useState, useContext } from "react";
import * as AuthService from "../services/request";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const onRegisterSubmit = async (values) => {
        await AuthService.post("/users/register", values);
    };

    const contextValues = { onRegisterSubmit };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};
