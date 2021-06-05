import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { makeStyles } from 'react-native-elements';

import Subheading from './Subheading';

const NumericInput = (props) => {
  const [clicked, setClicked] = useState(false);
  const styles = useStyles({ clicked });

  const { label, containerStyle, inputStyle, style, ...restProps } = props;

  return (
    <View style={[containerStyle]}>
      {label ? <Subheading>{label}</Subheading> : null}
      <View style={[styles.inputContainer, inputStyle]}>
        <TextInput
          style={[styles.input, style]}
          onFocus={() => setClicked(true)}
          onEndEditing={() => setClicked(false)}
          onSubmitEditing={() => setClicked(false)}
          keyboardType="numeric"
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="off"
          clearButtonMode="always"
          {...restProps}
        />
        <Subheading>Ft.</Subheading>
      </View>
    </View>
  );
}

const useStyles = makeStyles((theme, props) => ({
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.backgroundDark,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: props.clicked ? theme.colors.primary : theme.colors.backgroundDarker,
    paddingHorizontal: 10,
    height: 50,
    // width: '100%',
  },
  input: {
    // height:  50,
    flex: 1,
    fontSize: theme.Text.style.fontSize,
  },
}));

export default NumericInput;
