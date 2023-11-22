export const request = async (method, url, data) => {
    const res = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if (res.status === 204) {
        return {};
    }

    const result = await res.json();

    if (!res.ok) {
        throw result;
    }

    return result;
};

const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            "content-type": "application/json",
        };
    }

    const token = localStorage.getItem("accessToken");
    
    if (token) {
        options.headers = {
            ...options.headers,
            "X-Authorization": token,
        };
    }

    return options;
};
