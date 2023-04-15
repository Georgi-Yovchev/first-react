import { CarContext } from "../../contexts/CarContext";
import { CatalogList } from "../CatalogList/CatalogList";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as favouriteService from "../../services/favouriteService";

export const Favourites = () => {
    const { userId, isAuthenticated, auth, username } = useContext(AuthContext);
    const [favCar, setFavCar] = useState([]);

    useEffect(() => {
        favouriteService.checkByUserId(userId).then((result) => {
            setFavCar(result);
        });
    }, []);

    return <CatalogList {...favCar} />;
};
