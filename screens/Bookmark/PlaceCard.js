/*eslint-disable */
import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

/**
 * @function PlaceCard
 * Dumb compoenent used for displaying the users bookmark
 */
export default (PlaceCard = ({ title, street, city, img }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: img }} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text>{street}</Text>
        </View>
        <View>
          <Text>{city}</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "black",
    marginBottom: 5
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-start"
  },
  textContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    color: "#030303"
  }
});
