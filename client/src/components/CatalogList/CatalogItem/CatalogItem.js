import styles from "./CatalogItem.module.css";
import { Link } from "react-router-dom";

export const CatalogItem = ({
    _id,
    brand,
    model,
    image,
    price,
    description,
}) => {
    return (
        <div className={styles["product"]}>
            <div className={styles["image-box"]}>
                <div
                    className={styles["images"]}
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                />
            </div>
            <div className={styles["text-box"]}>
                <h2>
                    {brand}-{model}
                </h2>
                <h3>${price}</h3>
                <p>{description}</p>
                <Link to={`/catalog/${_id}`}>
                    <button type="button" className={styles["details-btn"]}>
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};
