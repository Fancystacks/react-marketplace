import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ImageInput({ imageUri }) {
    return (
        <View style={styles.container}>
 { !imageUri && ( <MaterialCommunityIcons name="camera" color={colors.medium} size={45}/> )}
 { imageUri && ( <Image source={{ uri: imageUri }} style={styles.image} /> )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 12,
        justifyContent: 'center',
        height: 100,
        overflow: 'hidden',
        width: 100
    },
    image: {
        height: '100%',
        width: '100%',
    }
});

export default ImageInput;