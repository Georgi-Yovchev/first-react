import { useContext } from "react";
import { CarContext } from "../../contexts/CarContext";
import { CatalogList } from "../CatalogList/CatalogList";

export const Catalog = () => {
    const { cars } = useContext(CarContext);
    return <CatalogList {...cars} />;
};
