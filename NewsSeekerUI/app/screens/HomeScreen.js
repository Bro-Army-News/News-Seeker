import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  StatusBar,
} from "react-native";

const HomeScreen = ({ children, isSearchFocused }) => {
  const keyboardShouldPersistTaps = isSearchFocused ? "always" : "never";
  return (
    <ScrollView
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      scrollEnabled={!isSearchFocused}
      style={styles.container}
    >
      <View style={styles.header}>
        <Image
          style={styles.headerLogo}
          source={require("../assets/Logo.jpg")}
        />
        <Text style={styles.headerText}>News Seeker</Text>
      </View>
      {children}
    </ScrollView>
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
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: "#f7f3f3",
    flex: 1,
  },
});

export default HomeScreen;
