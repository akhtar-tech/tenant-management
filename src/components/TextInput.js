import React, { useState } from 'react';
import { View, TextInput as _TextInput } from 'react-native';
import NumberFormat from 'react-number-format';
import { TextInputMask } from 'react-native-masked-text'
import { makeStyles } from 'react-native-elements';

import Subheading from './Subheading';
import PhoneNumberInput from './PhoneNumberInput';

const TextInput = (props) => {
  const [clicked, setClicked] = useState(false);
  const styles = useStyles({ clicked, ...props });

  const { label, style, value, onChangeText, isMasked, type, textInputProps, ...restProps } = props;

  if (isMasked) {
    let isAnotherMaskComp = false;
    let options = {};
    let anotherMaskCompProps = {};

    if (type === 'cell-phone') {
      return (
        <PhoneNumberInput {...props} />
      );
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
          <Subheading>{label}</Subheading>
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
        <Subheading>{label}</Subheading>
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

  return (
    <View>
      {label ? <Subheading>{label}</Subheading> : null}
      <_TextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setClicked(true)}
        onEndEditing={() => setClicked(false)}
        onSubmitEditing={() => setClicked(false)}
        {...restProps}
      />
    </View>
  );
}

const useStyles = makeStyles((theme, props) => ({
  input: {
    backgroundColor: theme.colors.backgroundDark,
    height:  50,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: props.clicked ? theme.colors.primary : theme.colors.backgroundDarker,
    fontSize: theme.Text.style.fontSize,
  },
}));

export default TextInput;
