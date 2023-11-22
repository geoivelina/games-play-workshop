import { request } from "../lib/request";

const baseUrl = "http://localhost:3030/data/comments";

export const create = async (gameId, text) => {
    const newComment = await request("POST", baseUrl, {
        gameId,
        text,
    });
    return newComment;
};

export const getAllCommentsByGameId = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load:`owner=_ownerId:users`
    });
    const result = await request("GET", `${baseUrl}?${query}`);

    return result;
};
