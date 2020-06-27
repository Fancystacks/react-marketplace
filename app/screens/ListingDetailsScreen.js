import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Jacket for sale</AppText>
            <AppText style={styles.price}>$100</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300,
        top: 30,
        marginBottom: 15
    },
    title: {
        fontSize: 22,
        fontWeight: '500'
    },
    price: {
        color: colors.primary,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 8
    }
})

export default ListingDetailsScreen;