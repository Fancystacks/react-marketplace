import { useEffect } from 'react';
import expoPushTokensApi from '../api/expoPushTokens';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'

export default useNotifications = (notificationListener) => {

    useEffect(() => {
        registerPushNotifications();

        if (notificationListener) Notifications.addListener(notificationListener);
    }, []);

    const registerPushNotifications = async () => {
        try {
            const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            if (!permission.granted) return;

            const token = await Notifications.getExpoPushTokenAsync();
            console.log(token);

            expoPushTokensApi.register(token);
        } catch (error) {
            console.log("Error using push token", error);
        }
    }

}