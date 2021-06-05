import React from 'react';
import { useFormikContext } from 'formik';
import { View } from 'react-native';

import Subheading from '../Subheading';
import NumericInput from '../NumericInput';
import ErrorMessage from './ErrorMessage';

const FormRoomSizeInput = ({ name, label, ...restProps }) => {
  const { values, errors, touched, setFieldTouched, handleChange } = useFormikContext();

  return (
    <View style={{ marginVertical: 5 }}>
      <Subheading>{label}</Subheading>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <NumericInput
          label="Height"
          containerStyle={{ flex: 1, maxWidth: 80, marginRight: 10 }}
          maxLength={2}
          value={values[name.height]}
          onBlur={() => setFieldTouched(name.height)}
          onChangeText={handleChange(name.height)}
        />
        <NumericInput
          label="Width"
          containerStyle={{ flex: 1, maxWidth: 80 }}
          maxLength={2}
          value={values[name.width]}
          onBlur={() => setFieldTouched(name.width)}
          onChangeText={handleChange(name.width)}
        />
      </View>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default FormRoomSizeInput;
