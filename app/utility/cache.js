import { AsyncStorage } from 'react-native';
import dayjs from 'dayjs';

const expirationMinutes = 10;
const prefix = 'cache';

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    } catch (error) {
        console.log(error);
    }
}

const isExpired = (item) => {
    const now = dayjs();
    const storedTime = dayjs(item.timestamp);
    return now.diff(storedTime, 'minute') > 10;
       
}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key);
        const item = JSON.parse(value)
        
        if (!item) return null;
        
        if (isExpired(item)) {
            // breaking CQS principal not to store too much data in the storage
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }
        return item.value;
    } catch (error) {
        console.log(error);
    }
}

export default {
    get,
    store
}