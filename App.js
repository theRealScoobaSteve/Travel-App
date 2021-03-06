import { createStackNavigator } from "react-navigation";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
  createReduxContainer
} from "react-navigation-redux-helpers";
/*eslint-disable */
import { Provider, connect } from "react-redux";
/*eslint-disable */
import React, { Component } from "react";
import promise from "redux-promise";

import Bookmark from "./screens/Bookmark/Bookmark";
import Search from "./screens/Search/Search";
import Place from "./screens/Place/Place";

import PlaceReducer from "./screens/Place/Reducers";
import SearchReducer from "./screens/Search/Reducers";
import BookmarkReducer from "./screens/Bookmark/Reducers";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Bookmark },
    Search: { screen: Search },
    Places: { screen: Place }
  },
  {
    initialRouteName: "Home"
  }
);

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer,
  searchData: PlaceReducer,
  currentPlace: SearchReducer,
  bookmarks: BookmarkReducer
});

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(state => state.nav);

const root = createReduxContainer(AppNavigator);
const mapStateToProps = state => ({
  state: state.nav
});

/*eslint-disable */
const AppWithNavigationState = connect(mapStateToProps)(root);

const store = createStore(appReducer, applyMiddleware(middleware, promise));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
