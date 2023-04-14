import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <main className={styles["home"]}>
            <div>
                <h1>
                    RENT <br /> & <br /> RENT OUT <br />
                    CARS
                </h1>
                <p>
                    Rent cars at the <strong>best price</strong>!
                </p>
                <Link to="/cars/catalog">RENT</Link>
            </div>
        </main>
    );
};
