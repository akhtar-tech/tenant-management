import React from 'react';
import { useFormikContext } from 'formik';
import { View } from 'react-native';

import Switch from '../Switch';
import ErrorMessage from './ErrorMessage';

const FormSwitch = ({ name, ...restProps }) => {
  const { values, errors, touched, setFieldValue } = useFormikContext();

  return (
    <View style={{ marginVertical: 5 }}>
      <Switch
        value={values[name]}
        onValueChange={() => setFieldValue(name, !values[name])}
        {...restProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default FormSwitch;