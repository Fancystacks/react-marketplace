import React, { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from '../components/lists/ListItem';

import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "account-details",
            backgroundColor: colors.secondary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "mailbox",
            backgroundColor: colors.primary
        },
        targetScreen: "Messages"
    }
];

function MyAccountScreen({ navigation }) {
    const { user, setUser } = useContext(AuthContext);

    const handleLogout = () => {
        setUser(null);
        authStorage.removeToken();
    }

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require('../assets/superuser.jpg')} />
            </View>
            <View>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    } />
            </View>
            <ListItem
            title="Log Out"
            IconComponent={
                <Icon name="account" backgroundColor={colors.danger}/>
            }
            onPress={handleLogout}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
});

export default MyAccountScreen;