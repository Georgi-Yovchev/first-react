import * as request from "../services/request";

const url = "/data/favourites";

export const create = async (carValues, auth) => {
    const result = await request.post(url, carValues, auth);

    return result;
};

export const checkByCarId = async (carId) => {
    const query = `?where=carId%3D%22${carId}%22`;
    const result = await request.get(`${url}${query}`);
    return result;
};

export const checkByUserId = async (userId) => {
    const query = `?where=_ownerId%3D%22${userId}%22`;
    const result = await request.get(`${url}${query}`);
    return result;
};
