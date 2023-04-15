import * as request from "../services/request";

const url = "/data/favourites";

export const create = async (username, auth) => {
    const result = await request.post(url, { username }, auth);

    return result;
};
