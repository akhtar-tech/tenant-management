import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Subheading } from 'react-native-paper';

import AadhaarTextInput from './AadhaarTextInput';
import ImageInput from './ImageInput';
import TextInput from './TextInput';
import Spacer from './Spacer';

const AadhaarInput = ({ imageUris = [], aadhaarNo, onAddImage, onRemoveImage, onChangeText, onBlur }) => {
  const onChangeFrontImage = imageUris[0]
    ? () => onRemoveImage(0)()
    : (uri) => onAddImage(0)(uri);

  const onChangeBackImage = imageUris[1]
    ? () => onRemoveImage(1)()
    : (uri) => onAddImage(1)(uri);

  return (
    <View style={styles.container}>
      <AadhaarTextInput
        label="Aadhaar No"
        value={aadhaarNo}
        onBlur={onBlur}
        onChangeText={onChangeText}
        containerStyle={{ width: 200 }}
      />
      <View style={styles.imageContainer}>
        <ImageInput
          imageUri={imageUris[0]}
          onChangeImage={onChangeFrontImage}
          containerStyle={styles.image}
        />
        <ImageInput
          imageUri={imageUris[1]}
          onChangeImage={onChangeBackImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imageContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  image: {
    marginRight: 10,
  },
});

export default AadhaarInput;