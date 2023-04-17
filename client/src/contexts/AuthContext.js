import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as AuthService from "../services/AuthService";
import { useLocalStorage } from "../hooks/useLocalStorage";
import * as validator from "../utils/validator";
import { ErrorContext } from "../contexts/ErrorContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { setErr } = useContext(ErrorContext);
    const [auth, setAuth] = useLocalStorage("auth", {});
    const navigate = useNavigate();

    const onLoginSubmit = async (values) => {
        const result = await AuthService.login(values);
        delete result.password;
        setAuth(result);
        navigate("/");
    };

    const onRegisterSubmit = async (data) => {
        try {
            validator.registerFornm(data);
        } catch (error) {
            return setErr(error.message);
        }

        try {
            await AuthService.register(data.username, data.password);
            onLoginSubmit({ username: data.username, password: data.password });
        } catch (error) {
            return console.log("There is a problem");
        }
    };

    const onLogout = async () => {
        await AuthService.logout(auth);
        setAuth({});
        localStorage.removeItem("auth");
        navigate("/");
    };

    const contextValues = {
        onRegisterSubmit,
        onLoginSubmit,
        onLogout,
        auth,
        userId: auth._id,
        username: auth.username,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};
