import React from 'react';

import FormHeadline from './FormHeadline';
import FormField from './FormField';

const HouseDetailForm = () => (
  <FormHeadline label="House Details">
    <FormField
      maxLength={255}
      name="houseName"
      label="House Name (optional)"
    />
    <FormField
      maxLength={255}
      name="address"
      label="Address"
    />
  </FormHeadline>
);

export default HouseDetailForm;
