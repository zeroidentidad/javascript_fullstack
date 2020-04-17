import * as requests from '../../requests/visits';

export function addVisitSuccess(visit){
   return { type: 'ADD_VISIT', visit };
}

// thunk
export function addVisit(place, observation){
   return (dispatch, getState) => {
      let user = getState().user;
      if(!user) return null;

      requests.add(user.jwt, place, observation).then(result =>{
         dispatch(addVisitSuccess(result))
      });

   }
}

export function loadAllSuccess(visits){
   return { type: 'LOAD_VISITS', visits };
}

// thunk
export function loadAllForPlace(slug){
   return (dispatch, getState) => {      
      requests.getAllForPlace(slug).then(result =>{
         dispatch(loadAllSuccess(result))
      });

   }
}