import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Subheading } from 'react-native-paper';

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
      <View>
        <TextInput
          isMasked
          label="Aadhaar no"
          type="aadhaar"
          value={aadhaarNo}
          onBlur={onBlur}
          onChangeText={onChangeText}
          style={{ width: 130 }}
        />
      </View>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    marginRight: 10,
  },
});

export default AadhaarInput;