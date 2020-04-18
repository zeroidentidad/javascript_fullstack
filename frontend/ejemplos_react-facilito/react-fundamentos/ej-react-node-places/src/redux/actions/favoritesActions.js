import * as requests from '../../requests/favs';

export function addSuccess(place){
    return { type: 'ADD_FAVORITE', place}
}

// thunk
export function add(placeId){
    return (dispatch, getState) => {
        let user = getState().user;
        if(!user) return Promise.reject();

        requests.add(user.jwt, placeId)
            .then(res => {
                dispatch(addSuccess(res))
            }).catch(console.log);
    }
}