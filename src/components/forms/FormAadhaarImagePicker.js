import React from 'react';
import { useFormikContext } from 'formik';

import AadhaarInput from '../AadhaarInput';
import ErrorMessage from './ErrorMessage';

const FormAadhaarImagePicker = ({ name1, name2, ...restProps }) => {
  const { values, errors, touched, setFieldValue, handleChange, setFieldTouched } = useFormikContext();
  const imageUris = values[name2];

  const handleAdd = index => uri => {
    const newImageUris = [...imageUris];
    newImageUris[index] = uri;

    setFieldValue(name2, newImageUris);
  };

  const handleRemove = (index) => () => {
    const newImageUris = [...imageUris];
    newImageUris[index] = '';

    setFieldValue(name2, newImageUris);
  };

  return (
    <>
      <AadhaarInput
        aadhaarNo={values[name1]}
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
        onBlur={() => setFieldTouched(name1)}
        onChangeText={handleChange(name1)}
      />
      <ErrorMessage error={errors[name1]} visible={touched[name1]} />
    </>
  );
};

export default FormAadhaarImagePicker;