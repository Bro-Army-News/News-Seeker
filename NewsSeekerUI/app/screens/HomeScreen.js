import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const HomeScreen =() => {
    return (
        <View style={styles.primaryContainer}>
            <View style={styles.header}>
                    <Image style={styles.headerLogo} source={require('../assets/Logo.jpg')}/>
                    <Text style={styles.headerText}>News Seeker</Text>
            </View>
        </View>
    );
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
})

export default HomeScreen;