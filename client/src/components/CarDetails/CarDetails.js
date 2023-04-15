import styles from "./CarDetails.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as carService from "../../services/carService";

export const CarDetails = () => {
    const [car, setCar] = useState({});
    const { carId } = useParams();

    useEffect(() => {
        carService.getOne(carId).then((result) => {
            setCar(result);
        });
    }, [carId]);

    return (
        <main className={styles["car-details"]}>
            <section className={styles["details-section"]}>
                <div className={styles["float-container"]}>
                    <div className={styles["float"]}>
                        <img
                            className={styles["image"]}
                            src="https://editorial.pxcrush.net/carsales/general/editorial/my22-ford-mustang-gt-03.jpg?width=1024&height=683"
                            alt=""
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
                        </div>
                    </div>
                    <div className={styles["float"]}>
                        <div className={styles["box"]}>
                            <form method="post">
                                <textarea
                                    id="description"
                                    cols="30"
                                    rows="5"
                                    name="description"
                                ></textarea>
                                <button type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
