import styles from "./ErrorMessage.module.css";
import { useContext, useEffect } from "react";

import { ErrorContext } from "../../contexts/ErrorContext";

export const ErrorMessage = () => {
    const { err, setErr } = useContext(ErrorContext);

    if (err) {
        setTimeout(() => {
            setErr("");
            console.log("hmm");
        }, 5000);
    }

    return (
        <div className={err ? styles["error-box"] : styles["hidden"]}>
            {err}
        </div>
    );
};
