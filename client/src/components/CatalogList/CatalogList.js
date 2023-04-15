import styles from "./CatalogList.module.css";
import { CatalogItem } from "./CatalogItem/CatalogItem";
// import { Link } from "react-router-dom";

import { useContext } from "react";
import { CarContext } from "../../contexts/CarContext";

export const CatalogList = () => {
    const { cars } = useContext(CarContext);
    return (
        // <main className={styles["catalogList"]}>
        <section className={styles["listing-section"]}>
            {cars.map((x) => (
                <CatalogItem key={x._id} {...x} />
            ))}
        </section>
        // </main>
    );
};
