import React from 'react';
import { Keyboard, Alert } from 'react-native';

import messagesApi from '../api/messages'

function ContactSeller({ listing }) {
    const handleSubmit = async ({ message} , { resetForm }) => {
        Keyboard.dismiss();

        const result = await messagesApi.send(message, listing.id);

        if (!result.ok) {
            console.log("Error", result);
            return Alert.alert("Error", "Unable to send message.");
        }

        resetForm();
    }
}