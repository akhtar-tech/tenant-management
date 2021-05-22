import React from 'react';

import FormHeadline from './FormHeadline';
import FormField from './FormField';
import FormFieldArea from './FormFieldArea';

const HouseDetailForm = () => (
  <FormHeadline label="House Details">
    <FormField
      maxLength={50}
      name="houseName"
      label="House Name (optional)"
      placeholder="Give name to your house"
    />
    <FormFieldArea
      maxLength={255}
      name="address"
      label="Address"
    />
  </FormHeadline>
);

export default HouseDetailForm;
