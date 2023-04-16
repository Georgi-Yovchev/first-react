import styles from "./List.module.css";
import { Item } from "../CatalogItem/Item";

export const List = (props) => {
    const cars = Object.values(props);

    return (
        <section className={styles["listing-section"]}>
            {cars.map((x) => (
                <Item key={x._id} {...x} />
            ))}
        </section>
    );
};
