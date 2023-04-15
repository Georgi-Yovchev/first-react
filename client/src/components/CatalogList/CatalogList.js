import styles from "./CatalogList.module.css";
import { CatalogItem } from "./CatalogItem/CatalogItem";
// import { Link } from "react-router-dom";

import { useContext } from "react";
import { CarContext } from "../../contexts/CarContext";

export const CatalogList = () => {
    const { cars } = useContext(CarContext);
    console.log(cars);
    return (
        // <main className={styles["catalogList"]}>
        <section className={styles["listing-section"]}>
            {cars.map((x) => (
                <CatalogItem key={x._id} {...x} />
            ))}
            {/* <div className={styles["product"]}>
                <div className={styles["image-box"]}>
                    <div
                        className={styles["images"]}
                        style={{
                            backgroundImage: `url(https://sc01.alicdn.com/kf/UT8.CaXX2NXXXagOFbXC/fresh-navel-oranges.jpg)`,
                        }}
                    />
                </div>
                <div className={styles["text-box"]}>
                    <h2 className="item">Orange</h2>
                    <h3 className="price">$4.99</h3>
                    <p className="description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ab fugiat nesciunt dolor impedit iste odio
                        aspernatur placeat vel perspiciatis itaque. In inventore
                        numquam iure neque. Aliquam assumenda excepturi adipisci
                        distinctio!
                    </p>
                    <button type="button" className={styles["details-btn"]}>
                        Details
                    </button>
                </div>
            </div> */}
        </section>
        // </main>
    );
};
