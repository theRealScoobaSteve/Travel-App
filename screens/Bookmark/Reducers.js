import {
  FETCH_BOOKMARKS,
  BOOKMARK_ADDED,
  BOOKMARK_REMOVED,
  GOTO_BOOKMARK
} from "./Actions";

/**
 * Reducer used for all data on the Bookmarks page
 * @function BookmarkReducer
 * @param {Object} state
 * @param {Object} action
 */
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BOOKMARKS:
      return action.payload;
    case BOOKMARK_ADDED:
      return [...state, action.payload];
    case BOOKMARK_REMOVED:
      console.log(state);
      console.log(state.filter(bookmark => bookmark.id !== action.payload.id));
      return state.filter(bookmark => bookmark.id !== action.payload.id);
    default:
      return state;
  }
}
