import styles from "./ErrorMessage.module.css";
import { useContext } from "react";

import { ErrorContext } from "../../contexts/ErrorContext";

export const ErrorMessage = () => {
    const { err, setErr } = useContext(ErrorContext);

    return (
        <div className={err ? styles["error-box"] : styles["hidden"]}>
            {err}
        </div>
    );
};
