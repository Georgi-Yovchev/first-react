import styles from "./Header.module.css";

export const Header = () => {
    return (
        <nav className={styles["one"]}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/marketplace">Markerplace</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};
