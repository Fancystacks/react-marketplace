import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function NewListingButton(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="plus-box-outline" color={colors.white} size={37}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 20,
        height: 70,
        justifyContent: 'center',
        width: 70
    }
});

export default NewListingButton;