import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as carService from "../services/carService";
import * as validator from "../utils/validator";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ErrorContext } from "../contexts/ErrorContext";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
    const { auth } = useContext(AuthContext);
    const { setErr } = useContext(ErrorContext);
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        carService.getAll().then((result) => {
            setCars(result);
        });
    }, []);

    const onCreateCarSubmit = async (data) => {
        try {
            validator.carForm(data);
        } catch (error) {
            return window.alert(error.message);
        }

        const newCar = await carService.create(data, auth);

        setCars((state) => {
            return [...state, newCar];
        });
        navigate("/cars/catalog");
    };

    const onEditCarSubmit = async (data, carId) => {
        try {
            validator.carForm(data);
        } catch (error) {
            return window.alert(error.message);
        }

        const updatedCar = await carService.update(carId, data, auth);
        const removedOldCar = cars.filter((x) => x._id !== carId);
        setCars([...removedOldCar, updatedCar]);
        navigate("/cars/catalog");
    };

    const onDeleteCar = async (carId) => {
        await carService.del(carId, auth);
        setCars((state) => state.filter((x) => x._id !== carId));
        navigate("/cars/catalog");
    };

    const contextValues = {
        cars,
        onCreateCarSubmit,
        onDeleteCar,
        onEditCarSubmit,
    };

    return (
        <CarContext.Provider value={contextValues}>
            {children}
        </CarContext.Provider>
    );
};
