import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText/AppText';

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
    <Image style={styles.image} source={image}/>
    <View style={styles.detailsContainer}>

    <AppText style={styles.title}>{title}</AppText>
    <AppText style={styles.subTitle}>{subTitle}</AppText>
    </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer:{
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