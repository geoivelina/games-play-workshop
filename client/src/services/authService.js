import { request } from "../lib/request";

const baseUrl = "http://localhost:3030/users";

export const login = async (loginData) => {
    try {
        const result = await request("POST", `${baseUrl}/login`, loginData);
        return result;
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};
