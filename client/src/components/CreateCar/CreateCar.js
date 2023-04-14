import styles from "./CreateCar.module.css";

export const CreateCar = () => {
    return (
        <main className={styles["create-car"]}>
            <section className={styles["create-section"]}>
                <div className={styles["create-form"]}>
                    <div>
                        <form action="index.html" method="post">
                            <h1> Sign Up </h1>
                            <fieldset>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="user_name" />
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="mail"
                                    name="user_email"
                                />
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="user_password"
                                />
                                <label htmlFor="email">test1:</label>
                                <input
                                    type="email"
                                    id="mail"
                                    name="user_email"
                                />
                                <label htmlFor="email">test2:</label>
                                <input
                                    type="email"
                                    id="mail"
                                    name="user_email"
                                />
                                <label htmlFor="email">test3:</label>
                                <input
                                    type="email"
                                    id="mail"
                                    name="user_email"
                                />
                            </fieldset>
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>{" "}
            </section>
        </main>
    );
};