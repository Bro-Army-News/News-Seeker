import React from "react";
import { StyleSheet } from "react-native";
import HorizontalList from "./lists/HorizontalList";

const BreakingNews = ({ data }) => {
  return <HorizontalList title="Breaking News" data={data} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default BreakingNews;
