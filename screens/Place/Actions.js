import { getFirebase } from "../../services/Database";

export const BOOKMARK_PLACE = "bookmark_place";
export const REMOVE_BOOKMARK = "remove_bookmark";

const { database } = getFirebase();

/**
 * Action creator used to add a bookmark to the database
 * @param {Object} place
 * @param {Function} cb
 * @returns {Object} action
 */
export function bookMarkPlace(place, cb) {
  database
    .ref("bookmarks")
    .push(place)
    .then(() => {
      cb();
    })
    .catch(err => {
      console.error("ERROR: ", err);
    });
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
  database
    .ref(`bookmarks/${id}`)
    .remove()
    .then(() => {
      cb();
    });

  return {
    type: REMOVE_BOOKMARK,
    payload: {}
  };
}
