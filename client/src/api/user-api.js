const BASE_URL = "http://localhost:4012"

async function register(data) {

    const resp = await fetch(BASE_URL + '/register', {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
    });
    const userId = await resp.json();

    return userId;
}

async function login(data) {
        const resp = await fetch(BASE_URL + '/login', {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
    });
    const userId = resp.json();

    return userId;
}

async function logout() {
    await fetch(BASE_URL + '/logout', {
        credentials: 'include',
    });
}

const userApi = {
    register,
    logout,
    login
}

export default userApi;