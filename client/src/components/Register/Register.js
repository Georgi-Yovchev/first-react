import styles from "./Register.module.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm(
        {
            username: "",
            password: "",
            repassword: "",
        },
        onRegisterSubmit
    );
    return (
        <main className={styles["register"]}>
            <section className={styles["register-section"]}>
                <div className={styles["register-form"]}>
                    <div>
                        <form method="post" onSubmit={onSubmit}>
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
                                <label htmlFor="repassword">
                                    Confirm password:
                                </label>
                                <input
                                    type="repassword"
                                    id="repassword"
                                    name="repassword"
                                    value={values.repassword}
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
