import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import routes from "../navigation/routes";
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
        blurRadius={5}
        style={styles.background}
        source={require('../assets/wallpaper.jpg')}>
        <View style={styles.logoContainer}>
    <Text style={styles.tagline}>The Fast & Easy Way to Sell</Text>
    <Image style={styles.logo} source ={require('../assets/trolly.png')}/>
        </View>
        <View style={styles.buttonContainer}>
        <AppButton title="Log In" onPress={() => navigation.navigate(routes.LOGIN)} />
        <AppButton title="Register" color='secondary' onPress={() => navigation.navigate(routes.REGISTER)}/>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    buttonContainer: {
        width: '100%',
        padding: 15
    },
    logo: {
        width: 150,
        height: 120,
    },
    logoContainer: {
        position: "absolute",
        top: 39,
        alignItems: "center"
    },
    tagline: {
        fontSize: 25,
        top: 10,
        color: 'white',
        fontWeight: '700',
        textShadowColor: colors.black,
        textShadowRadius: 25,
        paddingVertical: 8,
        paddingBottom: 20
    }
})

export default WelcomeScreen;