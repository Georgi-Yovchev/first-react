import styles from "./Item.module.css";
import { Link } from "react-router-dom";

export const Item = ({
    _id,
    brand,
    model,
    image,
    price,
    description,
    carId,
}) => {
    let id = _id;
    if (carId) {
        id = carId;
    }

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
                <p>{description.slice(0, 305)}...</p>
                <Link to={`/catalog/${id}`}>
                    <button type="button" className={styles["details-btn"]}>
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};
