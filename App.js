import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import Screen from './app/components/Screen';
import { Button, Image } from 'react-native';
import ImageInput from './app/components/ImageInput';


export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
     if (!granted)
     alert('Permission is needed to access the photo library.');
  }

  useState(() => {
    requestPermission();
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled)
      setImageUri(result.uri)
    } catch (error) {
      console.log('Error uploading image');
    }
  }

  return (
    <Screen><Button title="Select Image" onPress={selectImage}/>
    <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }}/>
    <ImageInput imageUri={imageUri} />
    </Screen>
    );
  }