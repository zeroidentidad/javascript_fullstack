import * as request from '../../requests/places'

export function loadPlaces(places) {
    return {
        type: 'LOAD_PLACES', 
        places
    }
}

export function loadAll(){
    return(dispatch, getState) => {
        request.getPlaces().then(result=>{
            dispatch(loadPlaces(result.docs))
        })
    }
}