import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:6039/'
})

export default class App extends Component {
  state = {
    comments: []
  };

  constructor(){
    super();
    api.get('/type?category=na').then(res => {
      console.log(res.data)
      this.setState({comments: res.data})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.comments.map(com =><Text>{com}</Text>)}
        <Text>{JSON.stringify(this.state.data)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  text:{
    color: 'black',
    fontSize: 24,
  }
});