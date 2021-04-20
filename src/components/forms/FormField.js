import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

const FormField = ({ name, ...restProps }) => {
  const { values, errors, touched, setFieldTouched, handleChange } = useFormikContext();

  return (
    <View style={{ marginVertical: 5 }}>
      <TextInput
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...restProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default FormField;