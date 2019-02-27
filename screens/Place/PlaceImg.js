/*eslint-disable */
import React, { Component } from "react";
import { View, Image } from "react-native";
import { connect } from "react-redux";

/**
 * @class PlaceImg
 * Renders the image of a place to the place view
 */
class PlaceImg extends Component {
  /**
   * @method render
   */
  render() {
    return (
      <View style={{ flex: 3 }}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: this.props.photo }}
          resizeMode="stretch"
        />
      </View>
    );
  }
}

function mapStateToProps({ currentPlace }, { navigation }) {
  return {
    photo: navigation.getParam("photo", null) || currentPlace.place.photo
  };
}

export default connect(mapStateToProps)(PlaceImg);
