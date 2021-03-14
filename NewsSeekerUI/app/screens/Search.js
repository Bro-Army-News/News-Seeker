import React from 'react';
import {View, StyleSheet, StatusBar, TextInput, Image, Text} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Search = () => {
    return(
        <View style={styles.primaryContainer}>
            <View style={styles.header}>
                    <Image style={styles.headerLogo} source={require('../assets/Logo.jpg')}/>
                    <Text style={styles.headerText}>News Seeker</Text>
            </View>
            <View style={styles.maincontainer}>
            <View style={styles.container}>
                <TextInput style={styles.searchInput} placeholder="Search here..." />
            </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:'#e7e6e1',
        padding:10,
    },
    headerLogo:{
        width:30,
        height:30,
        borderRadius:10,
        left:120,

    },
    headerText:{
        fontStyle:'italic',
        fontWeight: 'bold',
        color:'black',
        fontSize:20,
        top:2,
        left:140,
    },
    maincontainer: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
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