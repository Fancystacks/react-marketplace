import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDelete(props) {
    return (
        <TouchableWithoutFeedback>
       <View style={styles.container}>
           <MaterialCommunityIcons
           name="trash-can-outline"
           size={40}
           color={colors.white}/>
       </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ListItemDelete;