import React from 'react';
import { View } from 'react-native';

import FormField from './FormField';
import FormDropDown from './FormDropDown';
import FormAadhaarImagePicker from './FormAadhaarImagePicker';
import { getNumbersTo } from '../../libs';

const TenantDetailForm = () => (
  <View>
    <FormField maxLength={255} name="tenantName" label="Tenant Name" />
    <FormDropDown
      label="No of Tenants"
      name="noOfTenant"
      placeholder=""
      variant="horizontal"
      items={getNumbersTo(4)}
      dropDownMaxHeight={500}
    />
    <FormField isMasked type="cell-phone" name="mobile" label="Phone No" />
    <FormAadhaarImagePicker name1="aadhaarNo" name2="aadhaarImageUris" />
  </View>
);

export default TenantDetailForm;
