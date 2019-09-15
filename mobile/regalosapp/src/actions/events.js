export function addEvent(event){
    return {
        type: 'ADD_EVENT',
        event: event
    }
}

export function removeEvent(event) {
    return {
        type: 'REMOVE_EVENT',
        event: event
    }
}

export function clearEvents() {
    return {
        type: 'CLEAR_EVENTS'
    }
}