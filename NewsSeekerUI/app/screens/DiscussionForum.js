import React, { useState } from 'react';
import { View,StyleSheet,Text,FlatList,Image,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const DiscussionForum = () => {
    const gotoDiscussionForumChat = ()=>{
        Actions.discussionForumChat()
    }
    const [newsTitle] = useState([
        { name: 'News Title 1', id: '1' },
        { name: 'News Title 2', id: '2' },
        { name: 'News Title 3', id: '3' },
        { name: 'News Title 4', id: '4' },
        { name: 'News Title 5', id: '5' },
        { name: 'News Title 6', id: '6' },
        { name: 'News Title 7', id: '7' },
        { name: 'News Title 8', id: '8' },
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
        padding: 15,
        backgroundColor: '#D9E4ED',
        fontSize: 24,
    },
    bodyContainer:{
        marginBottom:110,
    }
})
export default DiscussionForum;