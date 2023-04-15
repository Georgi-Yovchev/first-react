import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as AuthService from "../services/AuthService";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage("auth", {});
    const navigate = useNavigate();

    const onLoginSubmit = async (values) => {
        const result = await AuthService.login(values);
        setAuth(result);
        navigate("/");
    };

    const onRegisterSubmit = async (values) => {
        const { username, password, repassword } = values;
        if (password !== repassword) {
            return console.log("passwords missmatch");
        }

        try {
            await AuthService.register(username, password);
            onLoginSubmit({ username, password });
        } catch (error) {
            return console.log("There is a problem");
        }
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
