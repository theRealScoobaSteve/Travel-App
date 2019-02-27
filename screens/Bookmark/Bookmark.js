import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import { connect } from "react-redux";

import PlaceCard from "./PlaceCard";
import {
  fetchBookmarks,
  watchBookmarkAddedEvent,
  watchBookmarkRemovedEvent
} from "./Actions";

/**
 * landing screen that displays all of a users bookmarks
 * @class Bookmark
 */
class Bookmark extends Component {
  // Identifies the nav's title
  static navigationOptions = { title: "Bookmarks" };

  /**
   * @method addBookmark
   * Sends the user to the search page
   */
  addBookmark = () => {
    const { navigate } = this.props.navigation;
    navigate("Search");
  };

  handlePress = place => {
    const { navigate } = this.props.navigation;
    navigate("Places", place);
  };

  /**
   * @method renderCards
   * Renders all the users bookmarked places to the screen
   */
  renderCards = () => {
    if (this.props.bookmarks.length > 0) {
      return this.props.bookmarks.map(place => {
        const { name, address, photo } = place;
        const mainAddress = address.split(",");
        const subAddress = address.substr(address.indexOf(",") + 1).trim();
        return (
          <TouchableOpacity
            key={address}
            onPress={() => {
              this.handlePress(place);
            }}
          >
            <PlaceCard
              img={photo}
              title={name}
              street={mainAddress[0]}
              city={subAddress}
            />
          </TouchableOpacity>
        );
      });
    }
  };

  /**
   * @method render
   */
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <ScrollView>{this.renderCards()}</ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addBookmark} style={styles.button}>
            <Text style={styles.buttonText}>Add New Place</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps({ bookmarks }) {
  return { bookmarks };
}

function mapDispatch(dispatch) {
  dispatch(fetchBookmarks());
  watchBookmarkAddedEvent(dispatch);
  watchBookmarkRemovedEvent(dispatch);
  return {};
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1
  },
  content: {
    flex: 9,
    marginBottom: 5
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 5
  },
  buttonText: {
    color: "white",
    fontSize: 24
  },
  container: {
    flex: 1,
    margin: 5,
    borderRadius: 5
  }
});

export default connect(
  mapStateToProps,
  mapDispatch
)(Bookmark);
