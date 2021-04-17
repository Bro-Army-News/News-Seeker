import React from "react";
import { StyleSheet, View } from "react-native";
import FlatCard from "../cards/FlatCard";
import Title from '../common/Title'

const VerticalList = ({title, data}) => {
  return (
  <View>
    <Title>{title}</Title>
    <View style={styles.container}>
    {data.map(item => <FlatCard item={item.id}/>)}
    </View>
   
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default VerticalList;
