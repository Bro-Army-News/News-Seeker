import React from 'react';
import {View, StyleSheet, StatusBar, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Search = () => {
    return(
        <View style={styles.maincontainer}>
            <View style={styles.container}>
                <TextInput style={styles.searchInput} placeholder="Search here..." />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: '#5C5C5C',
        flex: 1,
    },
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16,
    },
})

export default Search;