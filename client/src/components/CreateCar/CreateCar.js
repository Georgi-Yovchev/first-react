import styles from "./CreateCar.module.css";
import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { CarContext } from "../../contexts/CarContext";

export const CreateCar = () => {
    const { onCreateCarSubmit } = useContext(CarContext);
    const { values, changeHandler, onSubmit } = useForm(
        {
            brand: "",
            model: "",
            image: "",
            year: "",
            engine: "",
            mileage: "",
            description: "",
        },
        onCreateCarSubmit
    );
    return (
        <main className={styles["create-car"]}>
            <section className={styles["create-section"]}>
                <div className={styles["create-form"]}>
                    <div>
                        <form method="post" onSubmit={onSubmit}>
                            <h1> Rent out your car </h1>
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
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>{" "}
            </section>
        </main>
    );
};
