import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';

import FormHeadline from './FormHeadline';
import FormField from './FormField';
import FormRoomSizeInput from './FormRoomSizeInput';
import FormDropDown from './FormDropDown';
import FormSwitch from './FormSwitch';
import TenantDetailForm from './TenantDetailForm';
import Icon from '../Icon';

const amenities = [
  { label: 'Electricity', value: 'electricity', icon: () => <Icon name="lightning-bolt" color="black" />, textStyle: { alignSelf: 'center' } },
  { label: 'Water', value: 'water', icon: () => <Icon name="water" color="black" />, textStyle: { alignSelf: 'center' } },
  { label: 'Internet', value: 'internet', icon: () => <Icon name="wifi-strength-4" color="black" />, textStyle: { alignSelf: 'center' } },
  { label: 'AC', value: 'ac', icon: () => <Icon name="air-conditioner" color="black" />, textStyle: { alignSelf: 'center' } },
  { label: 'Attached Bathroom', value: 'attached bathroom', icon: () => <Icon name="scale-bathroom" color="black" />, textStyle: { alignSelf: 'center' } },
  { label: 'Kitchen', value: 'kitchen', icon: () => <Icon name="silverware-fork-knife" color="black" />, textStyle: { alignSelf: 'center' } },
];

const RoomDetailForm = () => {
  const { values } = useFormikContext();

  return (
    <FormHeadline label="Room Details">
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <FormRoomSizeInput
          name="roomSize"
          label="Room size"
          format="##*##"
          mask="_"
        />
        <FormDropDown
          label="Amenities"
          multiple
          name="amenities"
          width={200}
          items={amenities}
        />
      </View>
      <FormField
        maxLength={255}
        name="roomName"
        label="Room Name (optional)"
      />
      <FormSwitch label="Do you want to add tenant information?" name="shouldAddTenant" />

      {values.shouldAddTenant ? <TenantDetailForm /> : null}
    </FormHeadline>
  );
}

export default RoomDetailForm;
