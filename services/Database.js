import * as firebase from "firebase";
import keys from "../services/Keys";

const { API_KEY, AUTH_DOMAIN, DATABSE_URL, PROJECT_ID, STORAGE_BUCKET } = keys;

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABSE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET
};

const app = firebase.initializeApp(config);

/**
 * @function getFirebase
 * helper to get a single firebase database globally
 */
export function getFirebase() {
  const database = app.database();

  return { database };
}
