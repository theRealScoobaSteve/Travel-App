/*eslint-disable */
import React, { Component } from "react";
import { View } from "react-native";
import { Container } from "steves-custom-components";

/*eslint-disable */
import PlaceImg from "./PlaceImg";
import PlaceData from "./PlaceData";

/**
 * @class Place
 * Renders the places view to the user, mainly used
 * to display specific data on a place
 */
class Place extends Component {
  render() {
    return (
      <Container>
        <PlaceImg navigation={this.props.navigation} />
        <PlaceData navigation={this.props.navigation} />
      </Container>
    );
  }
}

export default Place;
