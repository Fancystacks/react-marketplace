import React, { useState, useContext } from 'react';
import { StyleSheet, Image } from "react-native";
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';

import authApi from '../api/auth';
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must contain 8 characters, one uppercase, one number, and one special character"
    ).min(8).label("Password")
});

function LoginScreen(props) {
    const authContext = useContext(AuthContext);
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        const user = jwtDecode(result.data);
        authContext.setUser(user);
        authStorage.storeToken(result.data);
    }

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/trolly.png")}
            />
            <ErrorMessage error="Invalid email or password." visible={loginFailed} />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema} 
                >
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
                        <SubmitButton title="LOG IN" />
            </AppForm>
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