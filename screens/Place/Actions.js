export const BOOKMARK_PLACE = "bookmark_place";
export const REMOVE_BOOKMARK = "remove_bookmark";

/**
 * Action creator used to add a bookmark to the database
 * @param {Object} place
 * @param {Function} cb
 * @returns {Object} action
 */
export function bookMarkPlace(place, cb) {
  return {
    type: BOOKMARK_PLACE,
    payload: place
  };
}

/**
 * Removes a bookmark based on the adress provided
 * because it an adress will always be unique to an
 * establishment
 * @param {String} address
 * @returns {Object} action
 */
export function removeBookmark(id, cb) {
  return {
    type: REMOVE_BOOKMARK,
    payload: {}
  };
}
