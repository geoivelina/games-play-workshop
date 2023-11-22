import { request } from "../lib/request";

const baseUrl = "http://localhost:3030/users";

export const login = async (data) => {
        const result = await request("POST", `${baseUrl}/login`, data);
        return result;
};

export const logout = async ()=>{
    request("GET", `${baseUrl}/logout`)
}

export const register = async(data)=>{
    const result = await request("POST", `${baseUrl}/register`, data);
    return result;
}
