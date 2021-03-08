import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const HomeScreen = () => {
    const goToSearch = () => {
        Actions.search()
    }
    const goToDiscussion = () => {
        Actions.discuss()
    }
    const goToSettings = () => {
        Actions.settings()
    }
    return (
        <View style={style.body}>
            <Text style={style.title}>News Seeker</Text>
                <View style={style.contentWrapper}>
                    <Text style={style.content} onPress = {goToSearch}>Search News</Text>
                    <Text style={style.content} onPress = {goToDiscussion}>Discuss News</Text>
                    <Text style={style.contentSettings} onPress = {goToSettings}>Settings</Text>
                </View>
        </View>
    );
};

const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#5C5C5C',
    },
    title: {
        color: '#fff',
        fontSize: 50,
        alignSelf: 'center',
    },
    contentWrapper: {
        flex: 1,
        padding: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    content: {
        backgroundColor: '#fff',
        width: 150,
        height: 150,
        margin: 2,
        color: 'black',
        lineHeight: 150,
        textAlign: 'center',
        fontSize: 30,
    },
    contentSettings: {
        backgroundColor: '#fff',
        width: 300,
        margin: 2,
        color: 'black',
        lineHeight: 40,
        textAlign: 'center',
        fontSize: 20,
    }
})
    
export default HomeScreen;