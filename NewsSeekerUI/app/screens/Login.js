import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Actions } from "react-native-router-flux";

const Login = () => {
  const goToSignUp = () => {
    Actions.signup();
  };
  const goToHome = () => {
    Actions.home();
  };
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Image
          style={styles.headerLogo}
          source={require("../assets/Logo.jpg")}
        />
        <Text style={styles.headerText}>News Seeker</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.containerHeader}>LOG IN</Text>
        <ScrollView style={styles.containerLogin}>
          <TextInput placeholder="UserName" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <TouchableOpacity style={styles.submit} onPress={goToHome}>
            <Text style={styles.submitText}>LOG IN</Text>
          </TouchableOpacity>

          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginTop: 45,
              marginBottom: 25,
            }}
          />

          <Text style={styles.links}>Forgot Password?</Text>
          <Text style={styles.links} onPress={goToSignUp}>
            Not a Memeber yet? Sign Up Here
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#5C5C5C",
    flex: 1,
    justifyContent: "flex-end",
  },
  header: {
    flexDirection: "row",
    top: -40,
    left: 45,
  },
  headerLogo: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  headerText: {
    fontStyle: "italic",
    fontWeight: "bold",
    color: "linen",
    fontSize: 40,
    top: 2,
    left: 20,
    marginBottom: "5%",
  },
  container: {
    width: "100%",
    height: "75%",
    backgroundColor: "linen",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containerHeader: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 28,
    color: "green",
  },
  containerLogin: {
    margin: "7%",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    padding: 5,
    marginBottom: "15%",
  },
  submit: {
    marginHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    backgroundColor: "mediumseagreen",
  },
  submitColor1: {
    marginTop: 35,
    backgroundColor: "tomato",
  },
  submitColor2: {
    marginTop: 25,
    backgroundColor: "cornflowerblue",
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  links: {
    marginTop: 15,
    textAlign: "center",
  },
});

export default Login;
