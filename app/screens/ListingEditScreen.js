import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(20000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description")
});

const categories = [
    { label: "Clothing", value: 1 },
    { label: "Furniture", value: 2 },
    { label: "Technology", value: 3 }
];

function ListingEditScreen(props) {
    return (
        <Screen>
             <AppForm
                initialValues={{ title: '', price: '', description: '', category: null }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema} 
                >
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
                        placeholder="Category"
                        />
                         <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="cash"
                            keyboardType="numeric"
                            name="price"
                            placeholder="Price"
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
                          <SubmitButton title="SEARCH" />
                </AppForm>
        </Screen>
    );
}

export default ListingEditScreen;