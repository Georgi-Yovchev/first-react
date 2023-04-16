import { Item } from "../CatalogItem/Item";

export const List = (props) => {
    const cars = Object.values(props);
    console.log(cars);

    return cars.map((x) => <Item key={x._id} {...x} />);
};
