import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';

import DropDown from '../DropDown';
import ErrorMessage from './ErrorMessage';

const FormDropDown = ({ name, ...restProps }) => {
  const { values, errors, touched, handleChange, setFieldValue } = useFormikContext();

  return (
    <View>
      <DropDown
        value={values[name]}
        onChangeItem={item => {
          if (restProps.multiple) setFieldValue(name, item);
          else handleChange(name)(item.value);
        }}
        {...restProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default FormDropDown;
