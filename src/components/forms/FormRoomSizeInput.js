import React from 'react';
import { useFormikContext } from 'formik';
import { View } from 'react-native';

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

const FormRoomSizeInput = ({ name, ...restProps }) => {
  const { values, errors, touched, setFieldTouched, handleChange } = useFormikContext();

  return (
    <View style={{ marginVertical: 5 }}>
      <TextInput
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        isMasked
        textInputProps={{
          keyboardType: 'numeric'
        }}
        {...restProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default FormRoomSizeInput;
