import styles from "./EditCar.module.css";
import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import * as carService from "../../services/carService";
import { useContext, useEffect } from "react";
import { CarContext } from "../../contexts/CarContext";

export const EditCar = () => {
    const { onEditCarSubmit } = useContext(CarContext);
    const { carId } = useParams();
    const { values, changeHandler, onSubmit, changeValues } = useForm(
        {
            brand: "",
            model: "",
            price: "",
            image: "",
            year: "",
            engine: "",
            mileage: "",
            description: "",
            phoneNumber: "",
        },
        onEditCarSubmit,
        carId
    );

    useEffect(() => {
        carService.getOne(carId).then((result) => {
            changeValues(result);
        });
    }, [carId]);
    return (
        <main className={styles["create-car"]}>
            <section className={styles["create-section"]}>
                <div className={styles["create-form"]}>
                    <div>
                        <form method="post" onSubmit={onSubmit}>
                            <h1> Edit information </h1>
                            <fieldset>
                                <label htmlFor="brand">Brand:</label>
                                <input
                                    type="text"
                                    id="brand"
                                    name="brand"
                                    value={values.brand}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="model">Model:</label>
                                <input
                                    type="text"
                                    id="model"
                                    name="model"
                                    value={values.model}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="price">Price:</label>
                                <input
                                    type="text"
                                    id="price"
                                    name="price"
                                    value={values.price}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="image">Image:</label>
                                <input
                                    type="text"
                                    id="image"
                                    name="image"
                                    value={values.image}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="year">Year:</label>
                                <input
                                    type="text"
                                    id="year"
                                    name="year"
                                    value={values.year}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="engine">Engine:</label>
                                <input
                                    type="text"
                                    id="engine"
                                    name="engine"
                                    value={values.engine}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="mileage">Mileage:</label>
                                <input
                                    type="text"
                                    id="mileage"
                                    name="mileage"
                                    value={values.mileage}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="phoneNumber">
                                    Phone number:
                                </label>
                                <input
                                    type="number"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={values.phoneNumber}
                                    onChange={changeHandler}
                                />
                            </fieldset>
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                cols="30"
                                rows="5"
                                name="description"
                                value={values.description}
                                onChange={changeHandler}
                            ></textarea>
                            <button type="submit">Edit</button>
                        </form>
                    </div>
                </div>{" "}
            </section>
        </main>
    );
};
