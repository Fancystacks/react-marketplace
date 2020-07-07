import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewListingButton({ onPress }) {
    return (
            <View style={styles.container}>
        <TouchableOpacity onPress={onPress} >
                <MaterialCommunityIcons name="plus" color={colors.white} size={37} />
        </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 12,
        bottom: 20,
        height: 70,
        justifyContent: 'center',
        width: 70
    }
});

export default NewListingButton;