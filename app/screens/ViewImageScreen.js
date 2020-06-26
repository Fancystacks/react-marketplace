import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}> 
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
            <Image
            style={styles.image} 
            source={require('../assets/chair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
 
    closeIcon: {
        width: 50,
        backgroundColor: 'black',
        position: 'absolute',
        height: 50,
        top: 40,
        left: 25
    },
    deleteIcon: {
        width: 50,
        backgroundColor: '#000',
        position: 'absolute',
        height: 50,
        top: 40,
        right: 25
    },
    image: {
     width: '100%',
     opacity: .6,
     height: '100%'
 }
});

export default ViewImageScreen;