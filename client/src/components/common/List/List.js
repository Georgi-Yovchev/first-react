import { Item } from "../CatalogItem/Item";

export const List = (props) => {
    const cars = Object.values(props);

    return cars.map((x) => <Item key={x._id} {...x} />);
};
