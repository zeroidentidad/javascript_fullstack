export function login(jwt) {
    return {
        type: 'LOG_IN',
        jwt
    }
}

export function loadUser(user) {
    return {
        type: 'LOAD_USER',
        user
    }
}

export function logout() {
    return {
        type: 'LOG_OUT'
    }
}