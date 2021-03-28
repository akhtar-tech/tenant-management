import React from 'react';
import { View } from 'react-native';

import { RoomSection, LabelRow, Chip, Text } from '../components';

const RoomDetailScreen = () => (
  <View>
    <RoomSection label="Basic Information">
      <LabelRow label="Room rent:">2200</LabelRow>
      <LabelRow label="Room size:">{"17 * 17"}</LabelRow>
      <LabelRow label="Amenities:">
        <Chip text="Electricity" />
        <Chip text="Water" />
        <Chip text="Bathroom" />
        <Chip text="Kitchen" />
      </LabelRow>
    </RoomSection>
    <RoomSection label="Tenant Information">
      <LabelRow label="Head name:">Hamid</LabelRow>
      <LabelRow label="Aadhaar No:">0123 4567 8901</LabelRow>
      <LabelRow label="No of tenants:">3</LabelRow>
      <LabelRow label="Joining date:">19-03-2021</LabelRow>
    </RoomSection>
  </View>
);

export default RoomDetailScreen;
