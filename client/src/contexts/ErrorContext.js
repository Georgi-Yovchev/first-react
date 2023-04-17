import { createContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const contextValues = {};

    return (
        <ErrorContext.Provider value={contextValues}>
            {children}
        </ErrorContext.Provider>
    );
};
