import * as request from "../services/request";

const url = "/data/rental-cars";

export const create = async (data, auth) => {
    const result = await request.post(url, data, auth);

    return result;
};

export const getAll = async () => {
    const result = await request.get(url);

    return result;
};
