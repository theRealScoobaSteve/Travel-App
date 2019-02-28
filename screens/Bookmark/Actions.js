import { getFirebase } from "../../services/Database";

export const FETCH_BOOKMARKS = "fetch_bookmarks";
export const BOOKMARK_ADDED = "bookmark_added";
export const BOOKMARK_REMOVED = "bookmark_removed";

const { database } = getFirebase();

/**
 * Action creator used for fetching all bookmarks in database
 * on page load
 * @returns {Object} action
 */
export function fetchBookmarks() {
  const data = database
    .ref("bookmarks")
    .once("value")
    .then(snapshot => {
      let arr = [];
      // Iterate through data to convert to an array of objects
      if (snapshot) {
        const keys = Object.keys(snapshot.val());
        const data = snapshot.val();

        keys.forEach(key => {
          // Store the ID on the bookmark
          data[key].id = key;
          arr.push(data[key]);
        });
      }

      return arr;
    });

  return {
    type: FETCH_BOOKMARKS,
    payload: data
  };
}

/**
 * Action creator to notify redux that a bookmark has been
 * add to the database
 * @param {Object} bookmark
 * @returns {Object} action
 */
export const bookmarkAdded = bookmark => ({
  type: BOOKMARK_ADDED,
  payload: bookmark
});

/**
 * Action creator to notify redux that a bookmark has been
 * removed to the database
 * @param {Object} bookmark
 * @returns {Object} action
 */
export const bookmarkRemoved = bookmark => {
  return {
    type: BOOKMARK_REMOVED,
    payload: bookmark
  };
};

/**
 * Dispatch event that is fired every time data is added in the
 * users bookmarks table
 * @param {Object} dispatch
 * @returns {Object} action
 */
export function watchBookmarkAddedEvent(dispatch) {
  database.ref("bookmarks").on("child_added", snap => {
    dispatch(bookmarkAdded(snap.val()));
  });
}

/**
 * Dispatch event that is fired every time data is removed in the
 * users bookmarks table
 * @param {Object} dispatch
 * @returns {Object} action
 */
export function watchBookmarkRemovedEvent(dispatch) {
  database.ref("bookmarks").on("child_removed", snap => {
    dispatch(bookmarkRemoved(snap.val().address));
  });
}
