import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText/AppText';
import Screen from "../components/Screen";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function AppPicker({ icon, placeholder, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
                    <AppText style={styles.text}>{placeholder}</AppText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen><Button title="Close" onPress={() => setModalVisible(false)}/></Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 13
    },
    text: {
        flex: 1
    }
});

export default AppPicker;