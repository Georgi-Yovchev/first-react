import * as request from "../services/request";

const url = "/data/favourites";

export const create = async (data, auth) => {
    const result = await request.post(url, data, auth);

    return result;
};
