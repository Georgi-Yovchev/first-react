import styles from "./Login.module.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm(
        {
            username: "",
            password: "",
        },
        onLoginSubmit
    );

    return (
        <main className={styles["login"]}>
            <section className={styles["login-section"]}>
                <div className={styles["login-form"]}>
                    <div>
                        <form
                            action="index.html"
                            method="post"
                            onSubmit={onSubmit}
                        >
                            <h1> Sign Up </h1>
                            <fieldset>
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={values.username}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={values.password}
                                    onChange={changeHandler}
                                />
                            </fieldset>
                            <button
                                type="submit"
                                className={styles["submit-btn"]}
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>{" "}
            </section>
        </main>
    );
};
