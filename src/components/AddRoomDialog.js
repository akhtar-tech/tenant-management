import React from 'react';
import { ScrollView, View } from 'react-native';
import { useFormikContext } from 'formik';

import Modal from './Modal';
import { RoomDetailForm } from './forms';
import Button from './Button';
import { theme } from '../config';

const AddRoomDialog = ({
  roomsInformation,
  showAddRoomDialog,
  setShowAddRoomDialog,
}) => {
  const { handleSubmit } = useFormikContext();

  const closeModal = () => setShowAddRoomDialog(false);

  return (
    <Modal
      isVisible={showAddRoomDialog}
      coverScreen
      propagateSwipe
      title={`Room ${roomsInformation.length + 1}`}
    >
      <ScrollView>
        <RoomDetailForm />
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Button
          title="No, cancel"
          borderRadius={10}
          titleStyle={{ color: theme.colors.black }}
          onPress={closeModal}
        />
        <Button
          title="Add Room"
          borderRadius={10}
          onPress={handleSubmit}
          titleStyle={{ color: theme.colors.primary }}
        />
      </View>
    </Modal>
  );
}

export default AddRoomDialog;
