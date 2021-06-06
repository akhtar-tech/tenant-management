import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { makeStyles } from 'react-native-elements';

import Subheading from './Subheading';
import Caption from './Caption';
import ErrorText from './ErrorText';

const AadhaarTextInput = (props) => {
  const [clicked, setClicked] = useState(false);

  const styles = useStyles({ ...props, clicked });

  const {
    label,
    helperText,
    value,
    onChangeText,
    errorVisible,
    errorText,
    containerStyle,
    style,
    ...restProps
  } = props;

  const formatText = (text) => {
    let formattedText = text.split(' ').join('');

    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
    }

    return formattedText;
  }

  return (
    <View style={[containerStyle]}>
      <Subheading style={styles.label}>{label}</Subheading>
      {helperText ? <Caption isItalic>{helperText}</Caption> : null}
      <View style={[styles.innerContainer]}>
        <TextInput
          style={[styles.input, style]}
          value={formatText(value)}
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={14}
          placeholder="XXXX XXXX XXXX"
          onFocus={() => setClicked(true)}
          onEndEditing={() => setClicked(false)}
          onSubmitEditing={() => setClicked(false)}
          onChangeText={(text) => onChangeText(text.split(' ').join(''))}
          {...restProps}
        />
      </View>
      <ErrorText visible={errorVisible} error={errorText} />
    </View>
  );
}

const useStyles = makeStyles((theme, props) => ({
  innerContainer: {
    backgroundColor: theme.colors.backgroundDark,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomWidth: 2,
    borderColor: props.clicked ? theme.colors.primary : theme.colors.backgroundDarker,
  },
  label: {
    color: props.clicked ? theme.colors.primary : theme.colors.medium,
  },
  input: {
    marginLeft: 5,
    height: '100%',
    width: '100%',
    fontSize: theme.Text.style.fontSize,
  },
}));

export default AadhaarTextInput;
