import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Title from "../common/Title.js";
import Subtitle from "../common/Subtitle.js";

const FlatCard = ({ item }) => {
  const { thumbnail, title, desc } = item;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerLogo}
          source={require("../../assets/Logo.jpg")}
        />
        <Text style={styles.headerText}>News Seeker</Text>
      </View>
      <Image source={{ uri: thumbnail }} style={styles.image} />
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
    height: 80,
  },
  image: {
    flex: 0.35,
    height: "100%",
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
  },
});

export default FlatCard;
