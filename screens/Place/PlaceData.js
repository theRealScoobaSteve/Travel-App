/*eslint-disable */
import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { Button } from "steves-custom-components";

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
        <Button
          style={{
            width: 150
          }}
          bg="#18d127"
          onPress={this.removeBookmark}
        >
          ✔️ Bookmarked
        </Button>
      );
    } else {
      button = (
        <Button
          onPress={this.bookmark}
          style={{
            flex: 1,
            padding: 10
          }}
          bg="#1b2cf0"
        >
          Bookmark
        </Button>
      );
    }
    return button;
  };
  /**
   * @method render
   */
  render() {
    const { currentPlace } = this.props;
    return (
      <View style={styles.bodyContainer}>
        <View style={styles.dataContainer}>
          <Text style={styles.header}>{currentPlace.name}</Text>
          <Text style={styles.address}>{currentPlace.address}</Text>
          <View style={styles.buttonWrapper}>
            {this.renderButton(!!currentPlace.isBookmarked)}
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps({ currentPlace }, { navigation }) {
  // If params were passed in create theses values
  const name = navigation.getParam("name", null);
  const address = navigation.getParam("address", null);
  const id = navigation.getParam("id", null);
  const isBookmarked = !!name && !!address;

  // If coming from search page boom map it,
  // otherwise use params because user
  // is coming from bookmarks page
  return {
    currentPlace: currentPlace.place || {
      name,
      address,
      isBookmarked,
      id
    }
  };
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 2,
    backgroundColor: "white",
    flexDirection: "row",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30,
    marginTop: -20
  },
  header: {
    fontSize: 24,
    lineHeight: 26,
    color: "#030303"
  },
  address: {
    justifyContent: "center",
    color: "#030303",
    marginTop: 15,
    lineHeight: 19
  },
  round: {
    position: "absolute",
    height: 15,
    backgroundColor: "white"
  },
  dataContainer: {
    flex: 1,
    alignItems: "center"
  },
  buttonWrapper: {
    height: 60,
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(
  mapStateToProps,
  { bookMarkPlace, removeBookmark }
)(PlaceData);
