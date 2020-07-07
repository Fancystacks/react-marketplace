import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText/AppText';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';

function ListingDetailsScreen({ route }) {
    const listing = route.params;

    return (
        <View>
            <Image style={styles.image} source={listing.image}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.price}>{`$${listing.price}`}</AppText>
            <View style={styles.userContainer}>
            <ListItem
            image={require("../assets/superuser.jpg")}
            title="Leah Migacz"
            subTitle="3 Listings"
            />
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 25
    },
    image: {
        width: '100%',
        height: 300,
        top: 30,
        marginBottom: 15
    },
    price: {
        color: colors.primary,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 8
    },
    title: {
        fontSize: 22,
        fontWeight: '500'
    },
    userContainer: {
        marginVertical: 30
    }
})

export default ListingDetailsScreen;