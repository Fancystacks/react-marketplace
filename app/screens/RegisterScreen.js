import React from 'react';
import { StyleSheet, Image } from "react-native";
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(2).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must contain 8 characters, one uppercase, one number, and one special character"
    ).min(8).label("Password")
});

function RegisterScreen(props) {

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema} 
                >
                     <Image
                style={styles.logo}
                source={require("../assets/trolly.png")}
            />
                         <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="account"
                            keyboardType="default"
                            name="name"
                            placeholder="Name"
                            textContentType="name" 
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email-outline"
                            keyboardType="email-address"
                            name="email"
                            placeholder="Email"
                            textContentType="emailAddress" // iOS fill from keychain
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock-outline"
                            name="password"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <SubmitButton title="REGISTER" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 13
    },
    logo: {
        width: 110,
        height: 95,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
});

export default RegisterScreen;