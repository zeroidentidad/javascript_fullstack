export function login(jwt) {
    return {
        type: 'LOG_IN',
        jwt
    }
}