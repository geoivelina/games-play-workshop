export const request = async (method, url, data) => {
    const res = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if (!res.ok) {
        throw new Error("Something went wrog");
    }

    const result = await res.json();
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
    return options;
};