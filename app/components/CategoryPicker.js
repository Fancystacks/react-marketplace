import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import AppText from './AppText/AppText';

function CategoryPicker({ item, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
          </TouchableOpacity>
    <AppText style={styles.label}>{item.label}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 20,
        width: '33%'
    },
    label: {
        marginTop: 7,
        textAlign: 'center'
    }
});

export default CategoryPicker;