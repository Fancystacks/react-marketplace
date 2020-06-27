import React from 'react';
import { View } from 'react-native';
import Card from './app/components/Card';

export default function App() {
  
  return (
   <View style={{
     backgroundColor: 'papayawhip',
     padding: 20,
     paddingTop: 100
   }}>
     <Card
     title="Black boots for sale"
     subTitle="$110"
     image={require('./app/assets/boots.jpg')}
     />
     
   </View>
    );
  }