

export const FETCH_BOOKMARKS = "fetch_bookmarks";
export const BOOKMARK_ADDED = "bookmark_added";
export const BOOKMARK_REMOVED = "bookmark_removed";

/**
 * Action creator used for fetching all bookmarks in database
 * on page load
 * @returns {Object} action
 */
export function fetchBookmarks() {
  return {
    type: FETCH_BOOKMARKS,
    payload: { bookmarks }
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
export const bookmarkRemoved = bookmark => ({
  type: BOOKMARK_REMOVED,
  payload: bookmark
});
