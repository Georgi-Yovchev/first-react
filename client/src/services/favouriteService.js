import * as request from "../services/request";

const url = "/data/favourites";

export const create = async (username, carId, auth) => {
    const result = await request.post(url, { username, carId }, auth);

    return result;
};

export const checkByCarId = async (carId) => {
    const query = `?where=carId%3D%22${carId}%22`;
    const result = await request.get(`${url}${query}`);
    return result;
};
