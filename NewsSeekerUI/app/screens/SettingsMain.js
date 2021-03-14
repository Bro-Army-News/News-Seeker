import React from 'react';
import {View,StyleSheet,Text,Image,StatusBar} from 'react-native';

function SettingsMain(props) {
    return (
        <View style={styles.primaryContainer}>
            <View style={styles.header}>
                    <Image style={styles.headerLogo} source={require('../assets/Logo.jpg')}/>
                    <Text style={styles.headerText}>News Seeker</Text>
            </View>
            <View style={styles.mainBox}>
                <View style={styles.heading} >
                    <Text style={styles.textS}> Settings</Text>
                </View>
                <View style={styles.contentSetting} >
                    <Text style={styles.textStyle}>  Account</Text>
                    <Text style={styles.textStyle}>  Notification</Text>
                    <Text style={styles.textStyle}>  Feedback</Text>
                    <Text style={styles.textStyle}>  About</Text>
                </View>
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
    heading:{      
        width:"100%",
    },
    textS:{
        top:30,
        fontSize:40,
        fontWeight:"bold",
    },
    textStyle:{
        fontWeight:"bold",
        fontSize:25,
        paddingBottom:20,
        paddingTop:5,

    },
    mainBox:{
        flex:1,
        paddingLeft:"2%"
        
    },
    contentSetting:{
        top:120,
    }
})
export default SettingsMain;