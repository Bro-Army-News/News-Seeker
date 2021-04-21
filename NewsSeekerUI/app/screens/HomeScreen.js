import React, { useState, useEffect } from "react";
import {View,StyleSheet,Image,Text,FlatList} from "react-native";
import NewsCard from '../Cards/NewsCard'
import newAPI from '../api/newsApi'

const HomeScreen = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsFromAPI()
    }, [])

    function getNewsFromAPI() {
        newAPI.get('top-headlines?country=us&apiKey=88f83af1efea4b85816754d5f15b1caf')
            .then(async function (response) {
                setNews(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    if (!news) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                style={styles.headerLogo}
                source={require("../assets/Logo.jpg")}
                />
                <Text style={styles.headerText}>News Seeker</Text>
            </View>
                <FlatList data={news.articles}
                        keyExtractor={(item, index) => 'key' + index}
                        renderItem={({item}) => {
                            return <NewsCard item = {item}/>
                        }}
                    />               
        </View>
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
        backgroundColor: "#f7f3f3",
        flex: 1,
    },
    });

export default HomeScreen;