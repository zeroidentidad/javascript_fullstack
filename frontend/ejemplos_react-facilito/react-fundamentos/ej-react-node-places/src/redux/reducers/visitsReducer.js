export default function visitsReducer(state = [], action){
   switch(action.type){
      case 'ADD_VISIT':
         //combinar arreglos de la visita nueva(visit) y visita que ya existe(state)
         return [action.visit].concat(state);
      case 'LOAD_VISITS':
         return action.visits;
      default:
         return state;
   }
}