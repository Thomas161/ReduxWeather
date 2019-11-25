import { FETCH_WEATHER } from "../actions/index";
export default function(state = [], action) {
  //console.log("Action Recieved \n", action);
  // const { type } = action;
  switch (action.type) {
    case FETCH_WEATHER:
      /**Identical examples that do not mutate state
       return [...state,action.payload.data];
       */
      return state.concat([action.payload.data]);

    default:
      return state;
  }
}
