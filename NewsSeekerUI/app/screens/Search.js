<<<<<<< Updated upstream
import React from 'react';
import {View, StyleSheet, StatusBar, TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Search = () => {
    return(
        <View style={styles.maincontainer}>
            <View style={styles.container}>
                <TextInput style={styles.searchInput} placeholder="Search here..." />
=======
import React, {useState, useEffect,Component} from 'react';
import {View, StyleSheet, StatusBar, TextInput, Image, Text, TouchableOpacity, Alert,ActivityIndicator} from 'react-native';

// const SearchBody = (props) =>{
//     return ()=>{
//         this.state.response ? <Text style={styles.resultUpdated}>{this.state.response}</Text>: <Text/>
//     }
// }

class Search extends Component{    
    // Set an initializing state whilst API connects.
    constructor(props){
        super(props)
        this.state = {
            searchContent:true,
            loading: false,
            searchText: '',
            response:''
        }
    }

    //Checking if the relevant API can be connected.
    // componentDidMount(){
    //     fetch("http://10.0.2.2:8001/checkcon")
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data);
    //         this.setState({
    //             loading: false,
    //         })
    //     }).catch(error=>console.log("err",error))
    // }

    //Passing the value to the ML model and receiving the result from it.
    handleClick = (e) =>{
        console.log(this.state.searchText)
        const search = this.state.searchText
        fetch("http://10.0.2.2:8001/api/v1",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({value:search})
        }).then((response)=>response.json())
        .then(data => {
            console.log(data);
            this.setState({
                response:data.result
            })
        }).catch(error=>console.log("err",error))
    }

    render(){
        if(this.state.loading){
            return( 
                <View style={styles.primaryContainer}>
                    <View style={styles.header}>
                        <Image style={styles.headerLogo} source={require('../assets/Logo.jpg')}/>
                        <Text style={styles.headerText}>News Seeker</Text>
                    </View>
                    <View style={[styles.loader, {marginTop:'75%'}]}> 
                        <ActivityIndicator size="large" color="#0c9"/>
                    </View>
                </View>
          )}
        return(
            <View style={styles.primaryContainer}>
                <View style={styles.header}>
                    <Image style={styles.headerLogo} source={require('../assets/Logo.jpg')}/>
                    <Text style={styles.headerText}>News Seeker</Text>
                </View>
                <View style={styles.maincontainer}>
                    <View style={styles.container}>
                        <TextInput style={styles.searchInput}
                        multiline={true}
                        // numberOfLines={4}
                        onChangeText={(text) => this.setState({searchText:text})}
                        placeholder="Paste Your News Arcticle Here....."/>
                    </View>
                    <View style={styles.searchBtn}>
                        <TouchableOpacity style={styles.submit} onPress={(e) => this.handleClick(e)}>
                            <Text style={styles.submitText}>Search</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {/* <View style={styles.searchLoader}> 
                            <ActivityIndicator size="large" color="#0c9"/>
                        </View> */}
                        {
                            this.state.response ? <Text style={styles.fakeResultUpdated}>{this.state.response}</Text>: 
                            <Text style={styles.realResultUpdated}>{this.state.response}</Text>
                        }
                    </View>
                </View>
>>>>>>> Stashed changes
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
<<<<<<< Updated upstream
=======
    loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    searchLoader:{
        marginTop:100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
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
>>>>>>> Stashed changes
    maincontainer: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: '#5C5C5C',
        flex: 1,
    },
    container: {
        width: '100%',
        height: 250,
        backgroundColor: 'white',
<<<<<<< Updated upstream
        borderRadius: 8,
        justifyContent: 'center',
    },
=======
    },
    fakeResultUpdated:{
        marginTop:'20%',
        color:'purple',
        fontSize:30,
        fontWeight:'bold',
        marginHorizontal:'31%'
    },
    realResultUpdated:{
        marginTop:'20%',
        color:'green',
        fontSize:30,
        fontWeight:'bold',
        marginHorizontal:'31%'
    },
>>>>>>> Stashed changes
    searchInput: {
        borderColor:'black',
        borderWidth:1,
        width: '100%',
        height: '100%',
        paddingLeft: '5%',
        fontSize: 16,
        textAlignVertical:'top',
    },
<<<<<<< Updated upstream
=======
    searchBtn:{
        paddingTop:'15%',
        justifyContent:'center',
    },
    submit:{
        marginHorizontal:'30%',
        paddingTop:20,
        paddingBottom:40,
        borderRadius:30,
        backgroundColor:'mediumseagreen',
    },
    submitText:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',  
        alignSelf: "center",
        textTransform: "uppercase",   
    },
>>>>>>> Stashed changes
})

export default Search;