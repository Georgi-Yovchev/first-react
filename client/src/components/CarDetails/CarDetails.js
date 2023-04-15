import styles from "./CarDetails.module.css";
import { useParams } from "react-router-dom";

export const CarDetails = () => {
    const { carId } = useParams();
    console.log(carId);
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
                                <span>test brand</span>
                                <label htmlFor="model">
                                    <strong>Model</strong>
                                </label>
                                <span>test model</span>
                                <label htmlFor="price">
                                    <strong>Price</strong>
                                </label>
                                <span>test price</span>
                                <label htmlFor="year">
                                    <strong>Year</strong>
                                </label>
                                <span>test year</span>
                                <label htmlFor="engine">
                                    <strong>Engine</strong>
                                </label>
                                <span>test engine</span>
                                <label htmlFor="mileage">
                                    <strong>Mileage</strong>
                                </label>
                                <span>testa</span>
                                <label htmlFor="description">
                                    Description:
                                </label>
                                <span>
                                    testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </span>
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
