import { CarContext } from "../../contexts/CarContext";
import { List } from "../common/List/List";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as favouriteService from "../../services/favouriteService";

export const Favourites = () => {
    const { userId, isAuthenticated, auth, username } = useContext(AuthContext);
    const [favCars, setFavCars] = useState([]);

    useEffect(() => {
        favouriteService.checkByUserId(userId).then((result) => {
            setFavCars(result);
        });
    }, []);

    return <List {...favCars} />;
};
