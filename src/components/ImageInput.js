import React, { useEffect } from 'react';
import { Image, TouchableHighlight, Alert } from 'react-native';
import {
  requestMediaLibraryPermissionsAsync,
  launchImageLibraryAsync,
  MediaTypeOptions
} from 'expo-image-picker';
import { makeStyles } from 'react-native-elements';

import { theme } from '../config';
import Icon from './Icon';

const ImageInput = ({ imageUri, onChangeImage, containerStyle }) => {
  const styles = useStyles();
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await requestMediaLibraryPermissionsAsync();

    if (!granted) {
      alert('You need to enable permission to access the library');
    }
  }

  const handlePress = async () => {
    if (!imageUri) pickImage();
    else showDeleteDialogBox();
  }

  const pickImage = async () => {
    try {
      const options = { mediaTypes: MediaTypeOptions.Images, quality: 0.5 }
      const { uri, cancelled } = await launchImageLibraryAsync(options);

      if (!cancelled) onChangeImage(uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  }

  const showDeleteDialogBox = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this image?', [
      { text: 'No', style: 'cancel' },
      { text: 'Yes, delete', onPress: onChangeImage }
    ]);
  }

  return (
    <TouchableHighlight
      onPress={handlePress}
      style={[styles.container, containerStyle]}
      underlayColor={theme.colors.light}
    >
      {imageUri
        ? <Image source={{ uri: imageUri }} resizeMode="contain" style={styles.image} />
        : <Icon name="camera" size={40} color={theme.colors.medium} />}
    </TouchableHighlight>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: theme.colors.light,
    borderRadius: 25,
  },
  image: {
    width: '100%',
    height: '100%',
  },
}));

export default ImageInput;