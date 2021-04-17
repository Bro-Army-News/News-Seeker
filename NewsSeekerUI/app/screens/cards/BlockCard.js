import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Title from "../common/Title.js";
import Subtitle from "../common/Subtitle.js";

const BlockCard = ({ style, imageStyle, item }) => {
  const { thumbnail, title, desc } = item;
  return (
    <View style={[styles.container, style]}>
      <Image source={{ uri: thumbnail }} style={[styles.image, imageStyle]} />
      <View style={styles.contentContainer}>
        <Title>{title}</Title>
        <Subtitle>{desc}</Subtitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#e7e6e1",
    padding: 10,
  },
  headerLogo: {
    width: 30,
    height: 30,
    borderRadius: 10,
    left: 120,
  },
  headerText: {
    fontStyle: "italic",
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
    top: 2,
    left: 140,
  },
  container: {
    width: "100%",
    height: 350,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#5C5C5C",
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 15,
  },
  contentContainer: {
    padding: 5,
  },
});

export default BlockCard;
