const login = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    const url = "http://localhost:5000/login"

    return fetch(url, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

const logout = () => {
    localStorage.removeItem('user');
}

const handleResponse = (response) => {
    return response.text().then(data => {
        if (!response.ok) {
            const error = response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

export const userService = {
    login,
    logout
};