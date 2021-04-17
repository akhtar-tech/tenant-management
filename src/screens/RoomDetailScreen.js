import React, { useState } from 'react';
import { View } from 'react-native';
import { makeStyles } from 'react-native-elements';
import { Provider } from 'react-native-paper';

import {
  RoomSection,
  LabelRow,
  Chip,
  Button,
  Spacer,
  Dialog,
  FormatCurrency,
  RentDetail,
} from '../components';

const RoomDetailScreen = () => {
  const [loading, setLoading] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showInformationDialog, setShowInformationDialog] = useState(false);
  const styles = useStyles();

  const openDeleteDialog = () => setShowDeleteDialog(true);
  const hideDeleteDialog = () => setShowDeleteDialog(false);

  const openInformationDialog = () => setShowInformationDialog(true);
  const hideInformationDialog = () => setShowInformationDialog(false);
  const handleOpenInformationDialog = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      openInformationDialog();
    }, 2000);
  }

  return (
    <Provider>
      <View style={styles.container}>
        <View>
          <RoomSection label="Basic Information" onClickEdit={() => alert('Clicked on basic information')}>
            <FormatCurrency label="Room rent:" value="2200" />
            <LabelRow label="Room size:">{"17 * 17"}</LabelRow>
            <LabelRow label="Amenities:">
              <Chip text="Electricity" />
              <Chip text="Water" />
              <Chip text="Bathroom" />
              <Chip text="Kitchen" />
            </LabelRow>
          </RoomSection>
          <RoomSection label="Tenant Information" onClickEdit={() => alert('Clicked on tenant information')}>
            <LabelRow label="Head name:">Hamid</LabelRow>
            <LabelRow label="Aadhaar No:">0123 4567 8901</LabelRow>
            <LabelRow label="No of tenants:">3</LabelRow>
            <LabelRow label="Joining date:">19-03-2021</LabelRow>
          </RoomSection>
        </View>
        <View>
          <Button
            title="Calculate Rent"
            backgroundColor="#87bd6a"
            iconName="calculator-variant"
            raised
            loading={loading}
            onPress={handleOpenInformationDialog}
          />
          <Spacer space={2} />
          <Button
            title="Delete Room"
            backgroundColor="#f26868"
            iconName="delete"
            raised
            onPress={openDeleteDialog}
          />
        </View>
        <Dialog>
          <Dialog.Delete visible={showDeleteDialog} hideDialog={hideDeleteDialog} />
          <Dialog.Information
            visible={showInformationDialog}
            hideDialog={hideInformationDialog}
            title="Rent Information"
          >
            <RentDetail rent={2200} electricity={745} />
          </Dialog.Information>
        </Dialog>
      </View>
    </Provider>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    justifyContent: 'space-between',
  },
}));

export default RoomDetailScreen;
