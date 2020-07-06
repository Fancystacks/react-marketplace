import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        requestPermission();
    }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
         if (!granted)
         alert('Permission is needed to access the photo library.');
      }

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert('Delete', 'Delete this image?', [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No'}
        ]);
    }

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5
          });
          if (!result.cancelled)
          onChangeImage(result.uri)
        } catch (error) {
          console.log('Error uploading image');
        }
      }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (<MaterialCommunityIcons name="camera" color={colors.medium} size={45} />)}
                {imageUri && (<Image source={{ uri: imageUri }} style={styles.image} />)}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 12,
        justifyContent: 'center',
        height: 100,
        overflow: 'hidden',
        width: 100
    },
    image: {
        height: '100%',
        width: '100%',
    }
});

export default ImageInput;