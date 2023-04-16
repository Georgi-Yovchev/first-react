import { useContext } from "react";
import { CarContext } from "../../contexts/CarContext";
import { List } from "../common/List/List";
import styles from "./Catalog.module.css";

export const Catalog = () => {
    const { cars } = useContext(CarContext);

    if (cars.length > 0) {
        return (
            <section className={styles["listing-section"]}>
                <List {...cars} />
            </section>
        );
    } else {
        return (
            <section className={styles["listing-section"]}>
                <h1>There are no rental cars right now</h1>;
            </section>
        );
    }
};
