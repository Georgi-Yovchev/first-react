import styles from "./CarDetails.module.css";

export const CarDetails = () => {
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
                                <label htmlFor="brand">Brand:</label>
                                <span>test brand</span>
                                <label htmlFor="model">
                                    <strong></strong>strongModel:
                                </label>
                                <span>test model</span>
                                <label htmlFor="price">
                                    <strong></strong>Price:
                                </label>
                                <span>test price</span>
                                <label htmlFor="year">
                                    <strong></strong>Year:
                                </label>
                                <span>test year</span>
                                <label htmlFor="engine">
                                    <strong></strong>Engine:
                                </label>
                                <span>test engine</span>
                                <label htmlFor="mileage">
                                    <strong></strong>Mileage:
                                </label>
                                <span>
                                    testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </span>
                            </fieldset>
                            <label htmlFor="description">Description:</label>

                            <button type="submit">Sign Up</button>
                        </div>
                    </div>
                </div>{" "}
            </section>
        </main>
    );
};
