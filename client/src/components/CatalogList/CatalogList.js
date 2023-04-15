import styles from "./CatalogList.module.css";
import { CatalogItem } from "./CatalogItem/CatalogItem";

export const CatalogList = (props) => {
    const cars2 = Object.values(props);
    return (
        <section className={styles["listing-section"]}>
            {cars2.map((x) => (
                <CatalogItem key={x._id} {...x} />
            ))}
        </section>
    );
};
