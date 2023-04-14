import { createContext, useState, useContext } from "react";
import * as AuthService from "../services/request";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const onRegisterSubmit = async (values) => {
        console.log(values);
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};
