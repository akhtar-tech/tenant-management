import React, { useState } from 'react';
import * as Yup from 'yup';

import {
  Form,
  SubmitButton,
  HouseDetailForm,
  RoomDetailForm,
  ReviewForm,
} from '../components';
import { View, ScrollView } from 'react-native';

const validationSchema = Yup.object().shape({
  houseName: Yup.string().label('House name'),
  address: Yup.string().required().min(1).label('Address'),
  roomSize: Yup.string().required().min(3).label('Room size'),
  amenities: Yup.array().required().min(2).label('Amenities'),
});

const initialValues = {
  houseName: '',
  address: '',
  // roomNo: '1',
  // room: [],
  roomSize: '',
  roomName: '',
  amenities: ['electricity', 'water'],
  mobile: '',
  shouldAddTenant: true,
  aadhaarNo: '',
  aadhaarImageUris: ['', ''],
  noOfTenant: '1',
};

const AddHouseScreen = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => setShowReviewForm(false)}
    >
      <View style={{ height: '100%', justifyContent: 'space-between' }}>
        <ScrollView>
          <HouseDetailForm />
          <RoomDetailForm />
        </ScrollView>
        <View style={{ marginHorizontal: 20, marginBottom: 40 }}>
          <SubmitButton title="Add House" />
        </View>
      </View>
      <ReviewForm visible={showReviewForm} hideDialog={() => setShowReviewForm(false)} />
    </Form>
  );
}

export default AddHouseScreen;
