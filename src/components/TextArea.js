import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { makeStyles } from 'react-native-elements';

import Subheading from './Subheading';

const TextArea = (props) => {
  const { label, style, type, textInputProps, ...restProps } = props;

  const [clicked, setClicked] = useState(false);
  const styles = useStyles({ clicked, ...props });

  return (
    <View>
      {label ? <Subheading>{label}</Subheading> : null}
      <TextInput
        style={[styles.input, style]}
        multiline
        numberOfLines={4}
        onFocus={() => setClicked(true)}
        onEndEditing={() => setClicked(false)}
        onSubmitEditing={() => setClicked(false)}
        textContentType="none"
        {...restProps}
      />
    </View>
  );
}

const useStyles = makeStyles((theme, props) => ({
  input: {
    backgroundColor: theme.colors.backgroundDark,
    textAlignVertical: 'top',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: props.clicked ? theme.colors.primary : theme.colors.backgroundDarker,
    fontSize: theme.Text.style.fontSize,
  },
}));

export default TextArea;
