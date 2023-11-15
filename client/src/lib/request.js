export const request = async (method, url, data) => {
    const res = await fetch(url, {
        method,
    });
    if (!res.ok) {
        throw new Error("Something went wrog");
    }

    const result = await res.json();
    return result;
};
