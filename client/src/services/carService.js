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

export const getOne = async (carId) => {
    const result = await request.get(`${url}/${carId}`);
    return result;
};

export const del = async (carId, auth) => {
    const result = await request.del(`${url}/${carId}`, undefined, auth);

    return result;
};

export const update = async (carId, data, auth) => {
    const result = await request.put(`${url}/${carId}`, data, auth);

    return result;
};
