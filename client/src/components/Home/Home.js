import styles from "./Home.module.css";

export const Home = () => {
    return (
        <main className={styles["home"]}>
            <div>
                <h1>
                    RENT <br /> & <br /> RENT OUT <span>CARS</span>
                </h1>
                <p>
                    Rent <strong>cars</strong> at the{" "}
                    <strong>best price</strong>!
                </p>
                <a href="/games/catalog">RENT</a>
            </div>
        </main>
    );
};
