import React from 'react';
import { Image, ScrollView, View, StyleSheet,Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';

const SignUp = () => {
    const goToLogin = () => {
        Actions.login()
    }
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Image style={styles.headerLogo} source={require('../assets/Logo.jpg')}/>
                <Text style={styles.headerText}>News Seeker</Text>
            </View>
            <SafeAreaView style={styles.container}>
                <Text style={styles.containerHeader}>SignUp</Text>
                <ScrollView style={styles.ScrollView}>
                
                    <TextInput 
                    placeholder="UserName"
                    style={styles.input}/>
                    <TextInput 
                    placeholder="Email"
                    style={styles.input}/>
                    <TextInput 
                    placeholder="Password"
                    style={styles.input}/>
                    {/* <TextInput 
                    placeholder="Re-Enter Password"
                    style={styles.input}/> */}
                    <TouchableOpacity style={styles.submit} onPress = {goToLogin}>
                        <Text style={styles.submitText}>SIGN UP HERE</Text>
                    </TouchableOpacity>
                
                    <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginTop:45,
                        marginBottom:25,
                    }}/>

                    <Text style={styles.links}>Forgot Password?</Text>
                    <Text style={styles.links} onPress = {goToSignUp}>Not a Memeber yet? Sign Up Here</Text>
                </ScrollView>    
            </SafeAreaView>
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
        marginBottom:20,
        fontWeight: 'bold',
        fontSize:28,
        color:'green',
    },

    ScrollView:{
        margin:'7%',
    },
        
    input:{
        borderColor:'black',
        borderWidth:2,
        padding:5,
        marginBottom:30,
        marginRight:'2%',
    },
    submit:{
        marginHorizontal:30,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:30,
        marginRight:'10%',
        backgroundColor:'mediumseagreen',
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

export default SignUp;