import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler, carId) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values, carId);
    };

    const changeValues = (newValues) => setValues(newValues);

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
    };
};
