import React from 'react';
import SVG,{Path, View,StyleSheet,Text, StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';

function SettingsMain(props) {
   
    return (
        //<ImageBackground source={require("../../assets/wall.jpg")}style={styles.background}>
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
            <View style={styles.contentFooter}>
                <Text>Footer</Text>  
            </View>

        </View>        
                
                
            
        
        //</ImageBackground>
    );
}
const styles = StyleSheet.create({
    contentSetting:{
        flex:0.4,
    },
    contentFooter:{
        flex:0.4,
        //backgroundColor:"yellow",
    },
    heading:{
        flex:0.3,
        justifyContent:"flex-end",
        //backgroundColor:"white",
        
        width:"100%",
    },
    textS:{
        fontSize:40,
        fontWeight:"bold",
        
    },
    textStyle:{
        fontWeight:"bold",
        fontSize:25,
        paddingBottom:5,
        paddingTop:5,

    },
    mainBox:{
        justifyContent:"space-evenly",
        backgroundColor:"#5C5C5C",
        flex:1,
        paddingTop: StatusBar.currentHeight,
        paddingLeft:"2%"
        
    }
})
export default SettingsMain;