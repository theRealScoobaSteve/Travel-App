/*eslint-disable */
import React, { Component } from "react";
import { View } from "react-native";

/*eslint-disable */
import PlaceData from "./PlaceData";

/**
 * @class Place
 * Renders the places view to the user, mainly used
 * to display specific data on a place
 */
class Place extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <PlaceData navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Place;
