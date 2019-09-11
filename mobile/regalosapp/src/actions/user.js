export function login(user){
    return {
        type: 'LOG_IN',
        user: user
    }
}

export function logout(){
    return {
        type: 'LOG_OUT'
    }
}