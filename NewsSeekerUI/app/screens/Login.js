import React from 'react';
import { Image, View, StyleSheet,Text } from 'react-native';

function Login(props) {
    return (
        <View style={styles.body}>
            <Image/>
            <Text>News Seeker</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:'#5C5C5C',
    },
})

export default Login;