import React from 'react';
import { View,StyleSheet,Text,TouchableOpacity,TextInput,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const DisscussionForum = () => {
    return (
      <View style={styles.primaryContainer}>
        <View style={styles.header}>
                <Image style={styles.headerLogo} source={require('../assets/Logo.jpg')}/>
                <Text style={styles.headerText}>News Seeker</Text>
        </View>
        <View style={styles.heading} >
            <Text style={styles.texts}> Discussion Forum</Text>
        </View>
        <View style={styles.commentSection}>
          <TextInput multiline style={styles.commentBox} placeholder ="Write your ideas here ! "/>
        </View>

        <TouchableOpacity style={[styles.submit]}>
                    <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    mainBox:{
        backgroundColor:'#5C5C5C',
        flex:1,
        paddingTop: "10%"
      },
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
        marginTop: 10,
        marginLeft: 10,
        width:"100%",
      },
    
    texts:{
        fontSize:30,
        
      },
      commentSection:{
        marginTop: "10%"
      },
    
      commentBox:{
        width: "80%",
        height: 200,
        marginLeft: "10%",
        backgroundColor: "#c8d6e5",
        borderColor: "#222f3e",
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        padding: 5,
      },
    
    submit:{
        backgroundColor: "#10ac84",
        width:120,
        height:30,
        borderRadius:10,
        marginLeft: "60%",
        marginTop: "10%"
    },
    
    submitText:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
export default DisscussionForum;