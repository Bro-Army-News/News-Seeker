import React, { Component } from "react";
// import { AppRegistry } from "react-native";
// import Routes from "./app/Routes.js";
// import TabRoutes from "./app/TabRoutes";
// import { NavigationContainer } from "@react-navigation/native";
import data from "../../FakeData";
import HomeScreen from "./HomeScreen.js";
import FeaturedNews from "./FeaturedNews";
import BreakingNews from "./BreakingNews";
import EntertainmentNews from "./EntertainmentNews";
import PolitcalNews from "./PoliticalNews";
import TechNews from "./TechNews";

export default function App() {
  const breakingNews = data.filter((item) => item.category === "breaking-news");
  const techNews = data.filter((item) => item.category === "tech");
  const politcalNews = data.filter((item) => item.category === "political");
  const entertainmentNews = data.filter(
    (item) => item.category === "entertainment"
  );
  return (
    <HomeScreen>
      <FeaturedNews
        item={{
          id: "6",
          title: "This is the title no six.",
          desc:
            "Desc is the short form of description and this format is the actual same as our real database.",
          thumbnail: "http://lorempixel.com/400/200/",
          category: "tech",
        }}
      />
      <BreakingNews data={breakingNews} />
      <PolitcalNews data={politcalNews} />
      <TechNews data={techNews} />
      <EntertainmentNews data={entertainmentNews} />
    </HomeScreen>
  );
}