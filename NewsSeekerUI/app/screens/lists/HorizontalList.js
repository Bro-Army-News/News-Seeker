import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import SmallCard from "../cards/SmallCard";
import Title from "../common/Title";

const HorizontalList = ({ title, data }) => {
  return (
    <>
      <Title size={20}>{title}</Title>
      <View styles={styles.listStyle}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <SmallCard item={item} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 15,
  },
});

export default HorizontalList;
