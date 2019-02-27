/*eslint-disable */
import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { Col, Row, Container } from "steves-custom-components";

/**
 * @function PlaceCard
 * Dumb compoenent used for displaying the users bookmark
 */
export default (PlaceCard = ({ title, street, city, img }) => {
  return (
    <Container>
      <Row>
        <Image style={styles.image} source={{ uri: img }} resizeMode="cover" />
        <Col size={3} align="flex-start" style={{ marginLeft: 10 }}>
          <Row>
            <Text style={styles.title}>{title}</Text>
          </Row>
          <Row>
            <Text>{street}</Text>
          </Row>
          <Row>
            <Text>{city}</Text>
          </Row>
        </Col>
      </Row>
    </Container>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 10,
    flexDirection: "column"
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
    color: "#030303"
  }
});
