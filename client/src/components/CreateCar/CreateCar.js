import styles from "./CreateCar.module.css";

export const CreateCar = () => {
    return (
        <main className={styles["create-car"]}>
            <section className={styles["create-section"]}>
                <div className={styles["create-form"]}>
                    <div>
                        <form action="index.html" method="post">
                            <h1> Create new offer </h1>
                            <fieldset>
                                <label htmlFor="brand">Brand:</label>
                                <input type="text" id="brand" name="brand" />
                                <label htmlFor="model">Model:</label>
                                <input type="text" id="model" name="model" />
                                <label htmlFor="year">Year:</label>
                                <input type="text" id="year" name="year" />
                                <label htmlFor="engine">Engine:</label>
                                <input type="text" id="engine" name="engine" />
                                <label htmlFor="mileage">Mileage:</label>
                                <input
                                    type="text"
                                    id="mileage"
                                    name="mileage"
                                />
                            </fieldset>
                            <label htmlFor="description">Description:</label>
                            <textarea
                                name="description"
                                id="description"
                                cols="30"
                                rows="10"
                            ></textarea>
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>{" "}
            </section>
        </main>
    );
};
