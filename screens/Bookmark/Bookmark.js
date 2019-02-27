import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Container, Button, Content } from "steves-custom-components";

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
      <Container>
        <Content style={styles.content}>{this.renderCards()}</Content>
        <View style={styles.addButton}>
          <Button style={styles.button} onPress={this.addBookmark} bg="#0404CE">
            Add New Place
          </Button>
        </View>
      </Container>
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
  addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  content: {
    flex: 1
  },
  button: { height: 50, width: 100, flex: 1 }
});

export default connect(
  mapStateToProps,
  mapDispatch
)(Bookmark);
