import { CURRENT_PLACE, BOOKMARK_PLACE } from "./Actions";

/**
 * Returns the current state to the Search view
 * @function SearchReducer
 * @param {Object} state
 * @param {Object} action
 */
export default function(state = {}, action) {
  switch (action.type) {
    case CURRENT_PLACE:
      return action.payload;
    case BOOKMARK_PLACE:
      return action.payload;
    default:
      return state;
  }
}
