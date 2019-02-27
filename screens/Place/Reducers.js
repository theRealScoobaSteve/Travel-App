import { BOOKMARK_PLACE } from "./Actions";

/**
 * Returns the state of the place screen to the view
 * @function PlaceReducer
 * @param {Object} state
 * @param {Object} action
 */
export default function(state = {}, action) {
  switch (action.type) {
    case BOOKMARK_PLACE:
      return action.payload;
    default:
      return state;
  }
}
