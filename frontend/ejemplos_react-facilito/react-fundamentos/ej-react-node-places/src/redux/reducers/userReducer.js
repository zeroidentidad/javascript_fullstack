export default function userReducer(state={name: 'anonimo'}, action) {
    switch (action.type) {
        case 'LOG_IN':
            return {...state, jwt: action.jwt}
        case 'LOG_OUT':
            return {}
        case 'LOAD_USER':
            return {...state, name: action.user.name, _id: action.user._id, email: action.user.email}
        default:
            return state
    }
}