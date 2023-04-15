import styles from "./CarDetails.module.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as carService from "../../services/carService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { CarContext } from "../../contexts/CarContext";

export const CarDetails = () => {
    const { userId, isAuthenticated } = useContext(AuthContext);
    const { onDeleteCar } = useContext(CarContext);
    const [car, setCar] = useState({});
    const { carId } = useParams();

    useEffect(() => {
        carService.getOne(carId).then((result) => {
            setCar(result);
        });
    }, [carId]);

    let isOwner = false;
    if (userId === car._ownerId) {
        isOwner = true;
    }

    const onDeleteCarClick = () => {
        const isConfirmed = window.confirm(
            "Are yo usure you want to delete this item"
        );
        if (isConfirmed) {
            onDeleteCar(carId);
        }
    };
    return (
        <main className={styles["car-details"]}>
            <section className={styles["details-section"]}>
                <div className={styles["float-container"]}>
                    <div className={styles["float"]}>
                        <img
                            className={styles["image"]}
                            src={car.image}
                            alt="could not laod image"
                        />
                    </div>

                    <div className={styles["float"]}>
                        <div className={styles["box"]}>
                            <h1> Details </h1>
                            <fieldset>
                                <label htmlFor="brand">
                                    <strong>Brand</strong>
                                </label>
                                <span>{car.brand}</span>
                                <label htmlFor="model">
                                    <strong>Model</strong>
                                </label>
                                <span>{car.model}</span>
                                <label htmlFor="price">
                                    <strong>Price</strong>
                                </label>
                                <span>{car.price}</span>
                                <label htmlFor="year">
                                    <strong>Year</strong>
                                </label>
                                <span>{car.year}</span>
                                <label htmlFor="engine">
                                    <strong>Engine</strong>
                                </label>
                                <span>{car.engine}</span>
                                <label htmlFor="mileage">
                                    <strong>Mileage</strong>
                                </label>
                                <span>{car.mileage}</span>
                                <label htmlFor="description">
                                    Description:
                                </label>
                                <span>{car.description}</span>
                            </fieldset>
                            {isOwner && (
                                <>
                                    <Link to={`/catalog/${car._id}/edit`}>
                                        <button type="button">Edit</button>
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={onDeleteCarClick}
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {!isOwner && isAuthenticated && (
                        <div className={styles["float"]}>
                            <div className={styles["box"]}>
                                <form method="post">
                                    <textarea
                                        id="description"
                                        cols="30"
                                        rows="5"
                                        name="description"
                                    ></textarea>
                                    <button type="submit">Send message</button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};
