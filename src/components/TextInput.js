import React from 'react';
import { View, TextInput as _TextInput } from 'react-native';
import NumberFormat from 'react-number-format';
import { TextInputMask } from 'react-native-masked-text'
import { makeStyles } from 'react-native-elements';

import Text from './Text';

const TextInput = (props) => {
  const styles = useStyles();

  const { label, style, value, onChangeText, isMasked, type, textInputProps, ...restProps } = props;

  if (isMasked) {
    let isAnotherMaskComp = false;
    let options = {};
    let anotherMaskCompProps = {};

    if (type === 'cell-phone') {
      isAnotherMaskComp = true;
      options = { mask: '*99 99999 99999' };
      anotherMaskCompProps = {
        keyboardType: 'numeric',
        placeholder: '+91 xxxxxx xxxxx'
      }
    } else if (type === 'aadhaar') {
      isAnotherMaskComp = true;
      options = { mask: '9999 9999 9999' };
      anotherMaskCompProps = {
        keyboardType: 'numeric',
        placeholder: 'xxxx xxxx xxxx'
      }
    }

    if (isAnotherMaskComp) {
      return (
        <View>
          <Text>{label}</Text>
          <TextInputMask
            type={'custom'}
            options={options}
            value={value}
            onChangeText={onChangeText}
            style={[styles.input, style]}
            {...anotherMaskCompProps}
            {...restProps}
          />
        </View>
      );
    }

    return (
      <View>
        <Text>{label}</Text>
        <NumberFormat
          displayType="text"
          value={value}
          renderText={(val) => (
            <_TextInput
              underlineColorAndroid="transparent"
              style={[styles.input, style]}
              onChangeText={onChangeText}
              value={val}
              {...textInputProps}
            />
          )}
          {...restProps}
        />
      </View>
    );
  }

  if (label) {
    return (
      <View>
        <Text>{label}</Text>
        <_TextInput
          style={[styles.input, style]}
          value={value}
          onChangeText={onChangeText}
          {...restProps}
        />
      </View>
    );
  }

  return (
    <_TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      {...restProps}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  input: {
    borderBottomWidth: 1,
    height: 40,
    fontSize: theme.Text.style.fontSize,
  },
}));

export default TextInput;
