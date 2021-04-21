import React, { useState } from 'react';
import { View,StyleSheet,Text,FlatList,Image,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

const DiscussionForum = () => {
    const gotoDiscussionForumChat = ()=>{
        Actions.discussionForumChat()
    }

    const [newsTitle] = useState([
        { name: 'World', id: '1' },
        { name: 'Business', id: '2' },
        { name: 'Health', id: '3' },
        { name: 'Politics', id: '4' },
        { name: 'Science', id: '5' },
        { name: 'Sports', id: '6' },
      ]);

    return (
      <View style={styles.primaryContainer}>
        <View style={styles.header}>
                <Image style={styles.headerLogo} source={require('../assets/Logo.jpg')}/>
                <Text style={styles.headerText}>News Seeker</Text>
        </View>
        <View style={styles.bodyContainer}>
            <FlatList
                keyExtractor={(item) => item.id} 
                data={newsTitle} 
                renderItem={({ item }) => ( 
                    <TouchableOpacity onPress={gotoDiscussionForumChat}>
                         <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
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
    item: {
        flex: 1,
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom:15,
        padding: 25,
        backgroundColor: '#D9E4ED',
        fontSize: 24,
        color:'black',
    },
    bodyContainer:{
        marginBottom:110,
    }
})
export default DiscussionForum;