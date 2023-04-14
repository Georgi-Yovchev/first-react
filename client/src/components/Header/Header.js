import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <nav className={styles["one"]}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/cars/catalog">Rent cars</Link>
                </li>
                <li>
                    <Link to="/cars/create">Create</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">register</Link>
                </li>
            </ul>
        </nav>
    );
};
