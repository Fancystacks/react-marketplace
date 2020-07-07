import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText/AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Card({ title, subTitle, image, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>

                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    subTitle: {
        color: colors.primary,
        fontWeight: 'bold',
    },
    title: {
        marginBottom: 5
    }
});

export default Card;