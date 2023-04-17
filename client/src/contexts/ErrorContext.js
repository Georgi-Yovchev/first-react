import { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const [err, setErr] = useState("");

    const contextValues = {
        err,
        setErr,
    };

    return (
        <ErrorContext.Provider value={contextValues}>
            {children}
        </ErrorContext.Provider>
    );
};
