import styles from "./Register.module.css";

export const Register = () => {
    return (
        <main className={styles["register"]}>
            <section className={styles["register-section"]}>
                <div className={styles["register-form"]}>
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
                            </fieldset>
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>{" "}
            </section>
        </main>
    );
};
