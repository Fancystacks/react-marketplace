import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDelete from '../components/ListItemDelete';

const initialMessages = [
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
    const [messages, setMessages] = useState(initialMessages);

    const handleDelete = message => {
        // delete message from msg array
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    }

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
                    renderRightActions={() => 
                    <ListItemDelete onPress={() => handleDelete(item)}/> }
                     />}
            ItemSeparatorComponent={ListItemSeparator}
        />
    </Screen>
    );
}

const styles = StyleSheet.create({

});

export default MessagesScreen;