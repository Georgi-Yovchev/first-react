import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
    const { isAuthenticated, onLogout } = useContext(AuthContext);

    const onLogoutClick = () => {
        onLogout();
    };

    return (
        <nav className={styles["one"]}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/cars/catalog">Catalog</Link>
                </li>
                {isAuthenticated && (
                    <>
                        <li>
                            <Link to="/cars/create">Create</Link>
                        </li>
                        <li>
                            <Link to="/favourites">Favourites</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={onLogoutClick}>
                                Logout
                            </Link>
                        </li>
                    </>
                )}

                {!isAuthenticated && (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};
