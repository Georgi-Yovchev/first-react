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
                    <Link to="/items/marketplace">Marketplace</Link>
                </li>
                <li>
                    <Link to="/items/create">Create</Link>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};
