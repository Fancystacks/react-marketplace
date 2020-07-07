import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from "../components/Screen";
import routes from "../navigation/routes";
import Card from "../components/Card";
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Boots for sale',
        price: '100',
        image: require('../assets/boots.jpg')
    },
    {
        id: 2,
        title: 'Pastel jacket vintage',
        price: '150',
        image: require('../assets/jacket.jpg')
    }
];

function ListingsScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <FlatList
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) => 
            <Card
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
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