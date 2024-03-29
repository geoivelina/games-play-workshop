import { request } from "../lib/request";

const baseUrl = "http://localhost:3030/data/games";

export const create = async (gameData) => {
    const result = await request("POST", baseUrl, gameData);

    return result;
};

export const getAllGames = async () => {
    const result = await request("GET", baseUrl);
    return result;
};

export const getGameById = async (gameId) => {
    const result = await request("GET", `${baseUrl}/${gameId}`);
    return result;
};
