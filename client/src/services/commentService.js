import { request } from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/comments";

export const create = async (gameId, userName, text) => {
    const newComment = await request("POST", baseUrl, {
        gameId,
        userName,
        text,
    });
    return newComment;
};

export const getAllCommentsByGameId = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
    });
    const result = await request("GET", `${baseUrl}`);
    //TODO migrate to collection service

    return Object.values(result).filter((Comment) => Comment.gameId === gameId);
};
