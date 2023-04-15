import { createContext, useState, useContext } from "react";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
    const [cars, setCars] = useState([]);

    const contextValues = {};

    return (
        <CarContext.Provider value={contextValues}>
            {children}
        </CarContext.Provider>
    );
};
