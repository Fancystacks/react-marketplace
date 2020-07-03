import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText/AppText';
import colors from '../../config/colors';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons color={colors.medium} name="plus" size={25}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 17,
        backgroundColor: colors.white
    },
    detailsContainer: {
        marginLeft: 12,
        justifyContent: 'center',
        flex: 1,
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