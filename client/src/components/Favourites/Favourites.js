import { List } from "../common/List/List";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as favouriteService from "../../services/favouriteService";
import styles from "./Favourites.module.css";

export const Favourites = () => {
    const { userId } = useContext(AuthContext);
    const [favCars, setFavCars] = useState([]);

    useEffect(() => {
        favouriteService.checkByUserId(userId).then((result) => {
            setFavCars(result);
        });
    }, [userId]);

    if (favCars.length > 0) {
        return (
            <section className={styles["listing-section"]}>
                <List {...favCars} />
            </section>
        );
    } else {
        return (
            <section className={styles["listing-section"]}>
                <h1>There are no rental cars that have been favourited</h1>;
            </section>
        );
    }
};
