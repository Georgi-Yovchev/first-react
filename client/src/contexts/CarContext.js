import { createContext, useState, useEffect } from "react";
import * as carService from "../services/carService";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
    const { auth } = useContext(AuthContext);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then((result) => {
            setCars(result);
        });
    }, []);

    console.log(cars);
    const onCreateCarSubmit = async (data) => {
        const newCar = await carService.create(data, auth);
    };

    const contextValues = { cars, onCreateCarSubmit };

    return (
        <CarContext.Provider value={contextValues}>
            {children}
        </CarContext.Provider>
    );
};
