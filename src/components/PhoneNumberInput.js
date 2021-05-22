import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { makeStyles } from 'react-native-elements';

import Subheading from './Subheading';
import Text from './Text';
import Caption from './Caption';
import ErrorText from './ErrorText';

const phoneCode = {
  IN: {
    callingCode: '+91',
    region: 'Asia',
    subregion: 'Southern Asia',
    name: 'India'
  },
}

const formatText = {
  IN: (text) => {
    let formattedText = text.split(' ').join('');

    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp('.{1,5}', 'g')).join(' ');
    }

    return formattedText;
  },
}

const PhoneNumberInput = (props) => {
  const {
    label,
    helperText,
    errorVisible,
    errorText,
    value,
    style,
    countryCode = 'IN',
    onChangeText,
    ...restProps
  } = props;

  const [clicked, setClicked] = useState(false);
  const [country] = useState(phoneCode[countryCode]);

  const styles = useStyles({ ...props, clicked });

  return (
    <View>
      <Subheading style={styles.label}>{label}</Subheading>
      {helperText ? <Caption isItalic>{helperText}</Caption> : null}
      <View style={[styles.container]}>
        <Text>{country.callingCode}</Text>
        <TextInput
          style={[styles.input, style]}
          value={value}
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={11}
          placeholder="XXXXX XXXXX"
          onFocus={() => setClicked(true)}
          onEndEditing={() => setClicked(false)}
          onSubmitEditing={() => setClicked(false)}
          onChangeText={(text) => onChangeText(formatText[countryCode](text))}
          {...restProps}
        />
      </View>
      <ErrorText visible={errorVisible} error={errorText} />
    </View>
  );
}

const useStyles = makeStyles((theme, props) => ({
  container: {
    backgroundColor: theme.colors.backgroundDark,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderColor: props.clicked ? theme.colors.primary : theme.colors.backgroundDark,
  },
  label: {
    color: props.clicked ? theme.colors.primary : theme.colors.medium,
  },
  input: {
    marginLeft: 5,
    height: '100%',
    fontSize: theme.Text.style.fontSize,
  },
}));

export default PhoneNumberInput;
