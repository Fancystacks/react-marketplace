import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Button from "../components/AppButton";
import Card from "../components/Card";
import colors from '../config/colors';
import ActivityIndicator from '../components/ActivityIndicator';
import listingsApi from '../api/listings';
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from '../components/AppText/AppText';

function ListingsScreen({ navigation }) {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        loadListings();
    }, []);
    
    const loadListings = async () => {
       const response = await listingsApi.getListings();
       if(!response.ok) return setError(true);

       setError(false);
        setListings(response.data);
    }

    return (
        <Screen style={styles.screen}>
            {error && <>
            <AppText>Unable to load listings.</AppText>
            <Button title="Retry" onPress={loadListings}/>
            </>}
            <ActivityIndicator visible={loading} />
            <FlatList
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) => 
            <Card
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)} />
            }/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 18,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;