import React, { useState, useEffect, Component } from "react";
import {View,StyleSheet,ActivityIndicator,Text} from "react-native";
import { GiftedChat,Bubble,Send,SystemMessage } from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class DiscussionForumChat extends Component {
  // state = {
  //   user: {
  //     name: ""
  //   }
  // }
  // constructor(props){
  //   super(props);
  //   this.getUser();
  //   this.subscriber = firestore.collection("users").
  //   doc('6Ff3IDk4VhUEP8ToPpyN').onSnapshot(doc => {
  //     this.setState({
  //       user:{
  //         name:doc.data().name
  //       }
  //     })
  //   })
  // }

  // getUser = async () => {
  //   const userDocument = await firestore().collection("users").
  //   doc('6Ff3IDk4VhUEP8ToPpyN').get()
  //   console.log(userDocument)
  // }

  render() {
    return (
      <GiftedChat/>
    );
  }
}

export default DiscussionForumChat;