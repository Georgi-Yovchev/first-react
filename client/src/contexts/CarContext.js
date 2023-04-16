import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as carService from "../services/carService";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
    const { auth } = useContext(AuthContext);
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        carService.getAll().then((result) => {
            setCars(result);
        });
    }, []);

    const onCreateCarSubmit = async (data) => {
        if (data["brand"].length < 3) {
            return window.alert(
                "Car brand should be atleast 3 characters long"
            );
        }

        if (data["model"].length < 3) {
            return window.alert(
                "Car model should be atleast 3 characters long"
            );
        }

        if (data["price"] <= 0) {
            return window.alert("Price should be bigger than 0");
        }

        if (!data["image"].startsWith("http")) {
            return window.alert(
                "Image URL should satrt with http:// or https://"
            );
        }

        if (data["year"] < 1980) {
            return window.alert("Year should be bigger than 1980");
        }

        if (data["engine"].length < 3) {
            return window.alert("Engine should be atleast 3 characters long");
        }

        if (data["mileage"] <= 0) {
            return window.alert("Mileage should be bigger than 0");
        }

        if (data["phoneNumber"].length !== 10) {
            return window.alert("Phone number should be 10 digits long");
        }
        if (data["description"].length < 30) {
            return window.alert(
                "Description should be atleast 30 characters long"
            );
        }

        const newCar = await carService.create(data, auth);

        setCars((state) => {
            return [...state, newCar];
        });
        navigate("/cars/catalog");
    };

    const onEditCarSubmit = async (data, carId) => {
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
