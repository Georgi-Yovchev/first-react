import styles from "./CarDetails.module.css";

export const CarDetails = () => {
    return (
        <main className={styles["create-car"]}>
            <section className={styles["create-section"]}>
                <div className={styles["create-form"]}>
                    <div className={styles["float"]}>
                        <img
                            className={styles["image"]}
                            src="https://editorial.pxcrush.net/carsales/general/editorial/my22-ford-mustang-gt-03.jpg?width=1024&height=683"
                            alt=""
                        />
                    </div>

                    <div className={styles["float"]}>
                        <form method="post">
                            <h1> Rent out your car </h1>
                            <fieldset>
                                <label htmlFor="brand">Brand:</label>
                                <input type="text" id="brand" name="brand" />
                                <label htmlFor="model">Model:</label>
                                <input type="text" id="model" name="model" />
                                <label htmlFor="price">Price:</label>
                                <input type="text" id="price" name="price" />
                                <label htmlFor="image">Image:</label>
                                <input type="text" id="image" name="image" />
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
                                id="description"
                                cols="30"
                                rows="5"
                                name="description"
                            ></textarea>
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>{" "}
            </section>
        </main>
    );
};
