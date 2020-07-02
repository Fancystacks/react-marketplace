import React from 'react';
import { StyleSheet, Image } from "react-native";

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { Formik } from 'formik';

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/trolly.png")} />
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)} >

                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email-outline"
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress" // iOS fill from keychain
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock-outline"
                            placeholder="Password"
                            onChangeText={handleChange("password")}
                            secureTextEntry
                            textContentType="password"
                        />
                        <AppButton title="LOG IN" onPress={handleSubmit} />
                    </>
                )}

            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 13
    },
    logo: {
        width: 130,
        height: 105,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
});

export default LoginScreen;