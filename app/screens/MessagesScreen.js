import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDelete from '../components/ListItemDelete';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/superuser.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/superuser.jpg')
    }
]

function MessagesScreen(props) {
    return (<Screen>
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('selected', item)}
                    renderRightActions={ListItemDelete}
                     />}
            ItemSeparatorComponent={ListItemSeparator}
        />
    </Screen>
    );
}

const styles = StyleSheet.create({

});

export default MessagesScreen;