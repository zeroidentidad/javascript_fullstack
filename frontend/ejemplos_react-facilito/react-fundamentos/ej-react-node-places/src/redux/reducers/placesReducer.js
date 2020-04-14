export default function placesReducer(state=[], action) {
    switch (action.type) {
        case 'LOAD_PLACES':
            return action.places
        default:
            return state
    }
}