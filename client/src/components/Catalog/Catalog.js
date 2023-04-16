import { useContext } from "react";
import { CarContext } from "../../contexts/CarContext";
import { List } from "../common/List/List";

export const Catalog = () => {
    const { cars } = useContext(CarContext);
    return <List {...cars} />;
};
