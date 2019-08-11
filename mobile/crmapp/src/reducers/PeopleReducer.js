import personas from './personas.json';

const initialState = {
    personas: personas

}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}