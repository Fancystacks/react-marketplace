import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/wallpaper.jpg')}>
        <View style={styles.logoContainer}>
    <Image style={styles.logo} source ={require('../assets/trolly.png')}/>
    <Text>The Fast and Easy Way to Sell and Buy</Text>
        </View>
    
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        opacity: .6,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    loginButton: {
        width: '100%',
        height: 65,
        backgroundColor: '#FAF0E6'
    },
    logo: {
        width: 150,
        height: 120,
    },
    logoContainer: {
        position: "absolute",
        top: 30,
        alignItems: "center"
    },
    registerButton: {
        width: '100%',
        height: 65,
        backgroundColor: '#8FBC8F'
    },
})

export default WelcomeScreen;