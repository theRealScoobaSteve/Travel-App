import axios from "axios";

import { getFirebase } from "../../services/Database";
import keys from "../../services/Keys";

export const CURRENT_PLACE = "current_place";

/**
 * Action creator used to fetch the link to the image
 * from google
 * @param {Object} placeData
 * @param {Function} cb
 * @returns {Object} action
 */
export async function currentPlace(placeData, cb) {
  const { photo } = placeData;
  let response;
  try {
    response = await fetch(
      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photo}&key=${
        keys.API_KEY
      }`
    );
    placeData.photo = response.url;
    cb();
    return {
      type: CURRENT_PLACE,
      payload: placeData
    };
  } catch (e) {
    console.log("ERROR: ", e);
  }
}
