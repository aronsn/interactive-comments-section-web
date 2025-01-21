
export const fetchUtil = async (method, body) => {
    const url = '/api/comments';

    try {
        const options = {
            method: method,
            credentials: "omit",
            headers: {
                "Content-Type": "application/json"
            }
        };

        if (body) {
            options.body = JSON.stringify(body);
        };

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Response not ok: ${response.status}`)
        };

        return response.json();

    } catch (error) {
        throw new Error('Error: Unable to make a request to the server\n', error)
    }
}