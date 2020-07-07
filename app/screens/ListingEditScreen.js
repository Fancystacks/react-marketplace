import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import * as Location from 'expo-location';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import Screen from '../components/Screen';
import CategoryPicker from '../components/CategoryPicker';
import FormImagePicker from '../components/forms/FormImagePicker';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(20000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "Please provide at least one image")
});

const categories = [
    { label: "Clothing", value: 1, backgroundColor: 'tomato', icon: 'tshirt-crew-outline' },
    { label: "Furniture", value: 2, backgroundColor: 'mediumpurple', icon: 'mail' },
    { label: "Tech", value: 3, backgroundColor: 'dodgerblue', icon: 'laptop-mac' },
    { label: "Games", value: 4, backgroundColor: 'red', icon: 'gamepad-variant' },
    { label: "Fitness", value: 5, backgroundColor: 'seagreen', icon: 'racquetball' },
    { label: "Books", value: 6, backgroundColor: 'khaki', icon: 'book-open-page-variant' },
    { label: "Media", value: 7, backgroundColor: 'indianred', icon: 'music' },
    { label: "Auto", value: 8, backgroundColor: 'royalblue', icon: 'car-key' },
    { label: "Other", value: 9, backgroundColor: 'grey', icon: 'vanish' }
];

function ListingEditScreen() {
    const [location, setLocation] = useState();

    const getLocation = async () => {
        const { granted } = await Location.requestPermissionsAsync();
        if (!granted) return;
        const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude });
    }

    useEffect(() => {
        getLocation();
    }, []);
    return (
        <Screen>
             <AppForm
                initialValues={{ 
                    images: [],
                    title: '', 
                    price: '', 
                    description: '', 
                    category: null }}
                onSubmit={values => console.log(location)}
                validationSchema={validationSchema} 
                >
                    <FormImagePicker name="images" />
                     <AppFormField
                            icon="feature-search-outline"
                            keyboardType="default"
                            maxLength={50}
                            name="title"
                            placeholder="Title"
                        />
                           <AppFormPicker
                           items={categories}
                           name="category"
                           numberOfColumns={3}
                           PickerItemComponent={CategoryPicker}
                           placeholder="Category"
                           width='50%'
                           />
                        <AppFormField
                           autoCapitalize="none"
                           autoCorrect={false}
                           icon="cash"
                           keyboardType="numeric"
                           name="price"
                           placeholder="Price"
                           width='35%'
                       />
                        <AppFormField
                            numberOfLines={2}
                            maxLength={250}
                            multiline
                            icon="comment-text-outline"
                            keyboardType="default"
                            name="description"
                            placeholder="Description (optional)"
                        />
                          <SubmitButton title="POST" />
                </AppForm>
        </Screen>
    );
}

export default ListingEditScreen;