import axios from "axios";

import keys from "../../services/Keys";

export const CURRENT_PLACE = "current_place";

/**
 * Action creator used to fetch the link to the image
 * from google
 * @param {Object} placeData
 * @param {Function} cb
 * @returns {Object} action
 */
export function currentPlace(placeData, cb) {
  const { photo, address } = placeData;
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photo}&key=${
        keys.API_KEY
      }`
    )
    .then(res => {
      // Replace the photo data with the actual link to the image because
      // the reference number is un needed now
      placeData.photo = res.config.url;

      /**
       * @todo
       * Add logic for getting the current place
       */
    })
    .catch(err => {
      console.error("ERROR: ", err);
    });

  return {
    type: CURRENT_PLACE,
    payload: placeData
  };
}