/*eslint-disable */
import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";

import { bookMarkPlace, removeBookmark } from "./Actions";

/**
 * @class PlaceData
 * Smart component used to display the actual data of the
 * resturant
 */
class PlaceData extends Component {
  /**
   * @method bookmark
   * Bookmarks a place to the db and sends user to home screen
   */
  bookmark = () => {
    const { navigate } = this.props.navigation;
    this.props.bookMarkPlace(this.props.currentPlace, () => {
      navigate("Home");
    });
  };

  /**
   * @method removeBookmark
   * Removes the bookmark from database and navs user to home
   */
  removeBookmark = () => {
    const { navigate } = this.props.navigation;
    this.props.removeBookmark(this.props.currentPlace.id, () => {
      navigate("Home");
    });
  };

  /**
   * @method renderButton
   * @returns {JSX} view
   * Renders a button based on if the the place has already been
   * bookmarked or not
   */
  renderButton = bookmarked => {
    let button;
    if (bookmarked) {
      button = (
        <TouchableOpacity
          style={{
            width: 150
          }}
          onPress={this.removeBookmark}
        >
          <Text>✔️ Bookmarked</Text>
        </TouchableOpacity>
      );
    } else {
      button = (
        <TouchableOpacity
          onPress={this.bookmark}
          style={{
            flex: 1,
            padding: 10
          }}
        >
          <Text>Bookmark</Text>
        </TouchableOpacity>
      );
    }
    return button;
  };
  /**
   * @method render
   */
  render() {
    const { currentPlace } = this.props;
    console.log(currentPlace.name);
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={{ flex: 1, width: null, height: null }}
            source={{ uri: currentPlace.photo }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.buttonWrapper}>
          {this.renderButton(!!currentPlace.isBookmarked)}
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.header}>{currentPlace.name}</Text>
          <Text style={styles.address}>{currentPlace.address}</Text>
        </View>
      </View>
    );
  }
}

// <View style={styles.buttonWrapper}>
//   {this.renderButton()}
// </View>

function mapStateToProps({ currentPlace }, { navigation }) {
  // If params were passed in create theses values
  const name = navigation.getParam("name", null);
  const address = navigation.getParam("address", null);
  const id = navigation.getParam("id", null);
  const photo = navigation.getParam("photo", null);
  const isBookmarked = !!name && !!address;

  // If coming from search page boom map it,
  // otherwise use params because user
  // is coming from bookmarks page
  return {
    currentPlace: {
      name,
      address,
      photo,
      isBookmarked,
      id
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontSize: 24,
    lineHeight: 26,
    color: "black"
  },
  address: {
    justifyContent: "center",
    color: "black",
    marginTop: 15,
    lineHeight: 19
  },
  imgContainer: {
    flex: 5
  },
  dataContainer: {
    flex: 4,
    alignItems: "center"
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(
  mapStateToProps,
  { bookMarkPlace, removeBookmark }
)(PlaceData);
