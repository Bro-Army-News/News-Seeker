import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Actions } from "react-native-router-flux";

const WelcomeScreen = () => {
  const goToLogin = () => {
    Actions.login();
  };
  const goToSignUp = () => {
    Actions.signup();
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Home.jpg")}
    >
      <Image source={require("../assets/Logo.jpg")} style={styles.logo} />

      <View style={styles.loginArea}>
        <Text style={styles.welcomeHeading}>Welcome To News Seeker</Text>
        <TouchableOpacity
          style={[styles.submit, styles.submitColor1]}
          onPress={goToLogin}
        >
          <Text style={styles.submitText}>LOGIN HERE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.submit, styles.submitColor2]}
          onPress={goToSignUp}
        >
          <Text style={styles.submitText}>SIGN UP HERE</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginArea: {
    width: "100%",
    height: "30%",
    backgroundColor: "linen",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  welcomeHeading: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 22,
  },
  loginButtons: {
    margin: 20,
    marginTop: 25,
  },
  submit: {
    margin: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
  },
  submitColor1: {
    marginTop: 35,
    backgroundColor: "mediumseagreen",
  },
  submitColor2: {
    marginTop: 15,
    backgroundColor: "tomato",
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
  },
  logo: {
    width: 150,
    height: 150,
    position: "absolute",
    top: 90,
    borderRadius: 20,
  },
});

export default WelcomeScreen;
