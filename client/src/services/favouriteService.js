import * as request from "../services/request";

const url = "/data/favourites";

export const create = async (username, carId, auth) => {
    const result = await request.post(url, { username, carId }, auth);

    return result;
};
