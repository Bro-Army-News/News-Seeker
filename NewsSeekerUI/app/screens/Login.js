import React from 'react';
import { Image, View, StyleSheet,Text, TextInput, TouchableOpacity } from 'react-native';

function Login(props) {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Image style={styles.headerLogo} source={require('../assets/Logo.jpg')}/>
                <Text style={styles.headerText}>News Seeker</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.containerHeader}>LOGIN</Text>
                <View style={styles.containerLogin}>
                    <TextInput 
                    placeholder="UserName"
                    style={styles.input}/>
                    <TextInput 
                    placeholder="Password"
                    style={styles.input}/>
                    <TouchableOpacity style={styles.submit}>
                        <Text style={styles.submitText}>SIGN UP HERE</Text>
                    </TouchableOpacity>
                    <Text style={styles.links}>Forgot Password?</Text>
                    <Text style={styles.links}>Not a Memeber yet? Sign Up Here</Text>
                    <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginTop:15,
                    }}/>
                    <TouchableOpacity style={[styles.submit, styles.submitColor1]}>
                        <Text style={styles.submitText}>SIGN UP WITH EMAIL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.submit, styles.submitColor2]}>
                        <Text style={styles.submitText}>SIGN UP WITH FACEBOOK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:'#5C5C5C',
        flex:1,
        justifyContent:'flex-end',
    },
    header:{
        flexDirection:'row',
        top:-40,
        left:45,
    },
    headerLogo:{
        width:60,
        height:60,
        borderRadius:10,
    },
    headerText:{
        fontStyle:'italic',
        fontWeight: 'bold',
        color:'linen',
        fontSize:40,
        top:2,
        left:20,
    },
    container:{
        width:'100%',
        height:'75%',
        backgroundColor:'linen',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    containerHeader:{
        textAlign:'center',
        marginTop:20,
        fontWeight: 'bold',
        fontSize:28,
        color:'green',
    },
    containerLogin:{
        top:90,
        left:20,
        position:'absolute',
    },
    input:{
        borderColor:'black',
        borderWidth:2,
        padding:5,
        width:350,
        marginBottom:40,
    },
    submit:{
        marginHorizontal:30,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:30,
        backgroundColor:'mediumseagreen',
    },
    submitColor1:{
        marginTop:35,
        backgroundColor:'tomato',
    },
    submitColor2:{
        marginTop:25,
        backgroundColor:'cornflowerblue',
    },
    submitText:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
    },
    links:{
        marginTop:15,
        textAlign:'center',
    }
})

export default Login;