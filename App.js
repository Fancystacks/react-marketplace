import React from 'react';
import { View } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from './app/components/AppText/AppText';

export default function App() {
  
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <AppText>I like React NATIVE</AppText>
    </View>
    );
  }

