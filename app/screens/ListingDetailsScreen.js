import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText/AppText';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';
import ContactSeller from '../components/ContactSeller';

function ListingDetailsScreen({ route }) {
    const listing = route.params;

    return (
        <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
            <Image style={styles.image} preview={{ uri: listing.images[0].thumbnailUrl}} uri={listing.images[0].url} tint="light"/>
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
            <ContactSeller listing={listing}/>
            </View>
        </KeyboardAvoidingView>

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