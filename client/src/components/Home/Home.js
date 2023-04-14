import styles from "./Home.module.css";

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
                <a href="/games/catalog">RENT</a>
            </div>
        </main>
    );
};
