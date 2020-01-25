export const obtenerStateStorage = () => {
    const articulosStorage = localStorage.getItem('articulos');
    if (articulosStorage === null) {
        return undefined
    }
    return JSON.parse(articulosStorage);
}

export const guardarStateStorage = state => {
    const articulosState = JSON.stringify(state);
    localStorage.setItem('articulos', articulosState);
}