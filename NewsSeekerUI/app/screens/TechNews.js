import React from "react";
import { StyleSheet } from "react-native";
import HorizontalList from "./lists/HorizontalList";

const TechNews = ({ data }) => {
  return <HorizontalList title="Tech News" data={data} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default TechNews;
