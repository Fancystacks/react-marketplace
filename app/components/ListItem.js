import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';

function ListItem({ title, subTitle, image, onPress }) {
    return (
        <TouchableHighlight 
        underlayColor={colors.light}
        onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={image} />
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 17
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    subTitle: {
        fontSize: 15,
        color: colors.medium
    },
    title: {
        fontWeight: '500',
        fontSize: 18
    }
});

export default ListItem;