export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return state.concat([action.event]);
        case 'REMOVE_EVENT':
            return state.filter((event) => event.id != action.event.id); 
        case 'CLEAR_EVENTS':
            return [];                         
        default:
            return state;
    }
}