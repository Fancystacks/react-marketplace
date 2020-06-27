import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function AppButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button : {
        backgroundColor: '#8FBC8F',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 12
    }
})
export default AppButton;