import * as request from "../services/request";

export const login = async (values) => {
    const result = await request.post("/users/login", values);
    return result;
};

export const register = async (username, password) => {
    const result = await request.post("/users/register", {
        username,
        password,
    });
    return result;
};
