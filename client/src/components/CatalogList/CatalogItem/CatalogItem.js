import styles from "./CatalogItem.module.css";

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
                <h2 className="item">
                    {brand}-{model}
                </h2>
                <h3 className="price">${price}</h3>
                <p className="description">{description}</p>
                <button type="button" className={styles["details-btn"]}>
                    Details
                </button>
            </div>
        </div>
    );
};
