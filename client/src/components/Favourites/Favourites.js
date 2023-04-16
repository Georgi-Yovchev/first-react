import { List } from "../common/List/List";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as favouriteService from "../../services/favouriteService";

export const Favourites = () => {
    const { userId } = useContext(AuthContext);
    const [favCars, setFavCars] = useState([]);

    useEffect(() => {
        favouriteService.checkByUserId(userId).then((result) => {
            setFavCars(result);
        });
    }, [userId]);

    return <List {...favCars} />;
};
