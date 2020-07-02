import React from 'react';
import { StyleSheet, Image } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must contain 8 characters, one uppercase, one number, and one special character"
      ).min(8).label("Password")
});

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/trolly.png")} 
                />
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema} >

                {({ handleChange, handleSubmit, errors}) => (
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
                       <ErrorMessage error={errors.email}/>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock-outline"
                            placeholder="Password"
                            onChangeText={handleChange("password")}
                            secureTextEntry
                            textContentType="password"
                        />
                        <ErrorMessage error={errors.password}/>
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