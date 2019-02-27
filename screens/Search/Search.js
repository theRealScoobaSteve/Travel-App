import React, { Component } from "react";
import { connect } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { currentPlace } from "./Actions";
import keys from "../../services/Keys";

/**
 * @class Search
 * Renders the search page with google autocomplete to the user
 */
class Search extends Component {
  static navigationOptions = { title: "Search" };

  /**
   * @method render
   */
  render() {
    const { navigate } = this.props.navigation;
    return (
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2}
        autoFocus={false}
        returnKeyType={"search"}
        listViewDisplayed="auto"
        renderDescription={row => row.description}
        fetchDetails
        onPress={(data, details) => {
          this.props.currentPlace(
            {
              photo: details.photos[0].photo_reference,
              name: details.name,
              address: details.formatted_address,
              number: details.formatted_phone_number,
              website: details.website
            },
            () => {
              navigate("Places");
            }
          );
        }}
        getDefaultValue={() => ""}
        query={{ key: keys.API_KEY, language: "en", types: "establishment" }}
        styles={{
          textInputContainer: { width: "100%" },
          description: { fontWeight: "bold" },
          predefinedPlacesDescription: { color: "#1faadb" }
        }}
        currentLocation={false}
        nearbyPlacesAPI="GooglePlacesSearch"
        GoogleReverseGeocodingQuery={{ rankby: "distance", types: "food" }}
        debounce={200}
      />
    );
  }
}

export default connect(
  null,
  { currentPlace }
)(Search);
