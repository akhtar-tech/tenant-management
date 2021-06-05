import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import * as Yup from 'yup';

import {
  RoomSection,
  LabelRow,
  Chip,
  Form,
  SubmitButton,
  HouseDetailForm,
  ReviewForm,
  Button,
  Text,
  AddRoomDialog,
  FormHeadline,
} from '../components';
import { theme } from '../config';

const houseInitialValues = {
  houseName: '',
  address: '',
};

const houseValidationSchema = Yup.object().shape({
  houseName: Yup.string().label('House name'),
  address: Yup.string().required().min(1).label('Address'),
});

const roomInitialValues = {
  roomHeight: '',
  roomWidth: '',
  amenities: ['electricity', 'water'],
  roomName: '',
  shouldAddTenant: true,
  tenantName: '',
  noOfTenant: '1',
  mobile: '',
  aadhaarNo: '',
  aadhaarImageUris: ['', ''],
};

const roomValidationSchema = Yup.object().shape({
  roomHeight: Yup.string().required().min(1).max(2).label('Room height size'),
  roomWidth: Yup.string().required().min(1).max(2).label('Room width size'),
  amenities: Yup.array().required().min(2).label('Amenities'),
  roomName: Yup.string().label('Room name'),
  shouldAddTenant: Yup.bool().required(),
  tenantName: Yup.string().label('Tenant name').when('shouldAddTenant', {
    is: true,
    then: (d) => d.min(3).required()
  }),
  noOfTenant: Yup.string().label('No of tenants').when('shouldAddTenant', {
    is: true,
    then: (d) => d.min(1).required()
  }),
  mobile: Yup.string().label('Mobile').when('shouldAddTenant', {
    is: true,
    then: (d) => d.min(10).max(10).required()
  }),
  aadhaarNo: Yup.string().label('Aadhaar no').when('shouldAddTenant', {
    is: true,
    then: (d) => d.min(12).max(12).required()
  }),
});

const AddHouseScreen = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [roomsInformation, setRoomsInformation] = useState([]);
  const [showAddRoomDialog, setShowAddRoomDialog] = useState(false);

  return (
    <>
      <Form
        initialValues={houseInitialValues}
        validationSchema={houseValidationSchema}
        onSubmit={() => setShowReviewForm(false)}
      >
        <View style={{ height: '100%', justifyContent: 'space-between' }}>
          <ScrollView>
            <HouseDetailForm />
            <View style={{ marginHorizontal: 20, marginBottom: 40 }}>
              <Text style={{ marginBottom: 10 }}>If you want to add room detail now. Please click on "Add Room" button. Otherwise, click on "Add House" button</Text>
              <Button
                backgroundColor={theme.colors.primary}
                borderRadius={20}
                width="100%"
                title="Add Room"
                onPress={() => setShowAddRoomDialog(true)}
              />
            </View>
            {roomsInformation.length ? (
              <FormHeadline label="Room Details">
                {roomsInformation.map((roomInformation, index) => (
                  <RoomSection
                    label={`Room ${index + 1}`}
                    key={index}
                    containerStyle={{ margin: 0, marginTop: 15 }}
                  >
                    {(roomInformation.roomHeight && roomInformation.roomWidth) ? (
                      <LabelRow label="Room size:">
                        {`${roomInformation.roomHeight} ft * ${roomInformation.roomWidth} ft`}
                      </LabelRow>
                    ) : null}
                    {(roomInformation.amenities.length) ? (
                      <LabelRow label="Amenities:">{roomInformation.amenities.map(amenity => (
                        <Chip text={amenity} key={amenity} />
                      ))}</LabelRow>
                    ) : null}
                    {(roomInformation.roomName) ? (
                      <LabelRow label="Room name:">
                        {roomInformation.roomName}
                      </LabelRow>
                    ) : null}
                    {(roomInformation.tenantName) ? (
                      <LabelRow label="Tenant name:">
                        {roomInformation.tenantName}
                      </LabelRow>
                    ) : null}
                    {(roomInformation.noOfTenant) ? (
                      <LabelRow label="No of tenants:">
                        {roomInformation.noOfTenant}
                      </LabelRow>
                    ) : null}
                    {(roomInformation.mobile) ? (
                      <LabelRow label="Mobile:">
                        {roomInformation.mobile}
                      </LabelRow>
                    ) : null}
                    {(roomInformation.aadhaarNo) ? (
                      <LabelRow label="Aadhaar:">
                        {roomInformation.aadhaarNo}
                      </LabelRow>
                    ) : null}
                  </RoomSection>
                ))}
              </FormHeadline>
            ): null}
          </ScrollView>
          <View style={{ marginHorizontal: 20, marginBottom: 40 }}>
            <SubmitButton title="Add House" />
          </View>
        </View>
        <ReviewForm visible={showReviewForm} hideDialog={() => setShowReviewForm(false)} />
      </Form>
      {showAddRoomDialog ? (
        <Form
          initialValues={roomInitialValues}
          validationSchema={roomValidationSchema}
          onSubmit={(newRoomsInformation) => {
            setRoomsInformation([...roomsInformation, newRoomsInformation])
            setShowAddRoomDialog(false);
          }}
        >
          <AddRoomDialog
            roomsInformation={roomsInformation}
            setRoomsInformation={setRoomsInformation}
            showAddRoomDialog={showAddRoomDialog}
            setShowAddRoomDialog={setShowAddRoomDialog}
          />
        </Form>
      ) : null}
    </>
  );
}

export default AddHouseScreen;
