import React, {useState, useEffect,Component} from 'react';
import {View, StyleSheet, ScrollView, TextInput, Image, Text, TouchableOpacity, SafeAreaView,ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';

class SignUp extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSignUp = () => {
        const { email, password } = this.state
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Profile'))
            .catch(error => console.log(error))
    }
    render() {
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
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            placeholder="Email"
                            style={styles.input}/>

                            <TextInput 
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            placeholder="Password"
                            style={styles.input}
                            secureTextEntry={true}/>
                            
                            <TouchableOpacity style={styles.submit} onPress={this.handleSignUp} >
                                <Text style={styles.submitText}>SIGN UP HERE</Text>
                            </TouchableOpacity>
                            
                        </ScrollView>    
                </SafeAreaView>
            </View>
        );
    }
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
        marginBottom:40,
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
    submitColor1:{
        marginTop:25,
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

export default SignUp;