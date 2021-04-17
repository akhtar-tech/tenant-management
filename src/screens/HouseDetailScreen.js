import React, { useState } from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import { makeStyles } from 'react-native-elements';

import { HouseDetailHeader, RoomList, Spacer, Dialog, RentDetail } from '../components';
import { houses, rooms } from '../mockData';

const HouseDetailScreen = ({ route }) => {
  const styles = useStyles();
  const [state, setState] = useState({ open: false });
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [showInformationDialog, setShowInformationDialog] = useState(false);

  const onStateChange = ({ open }) => setState({ open });

  const openInformationDialog = () => setShowInformationDialog(true);
  const hideInformationDialog = () => setShowInformationDialog(false);
  const handleOpenInformationDialog = () => {
    // setLoading(true);
    setTimeout(() => {
      // setLoading(false);
      openInformationDialog();
    }, 2000);
  }

  const { open } = state;
  const { id, image, totalRooms, remainingRooms } = houses.find(({ id }) => id === route.params.houseId);
  const filteredRooms = rooms.filter(({ houseId }) => houseId === id);

  return (
    <Provider>
      <Portal>
        <HouseDetailHeader
          image={image}
          totalRooms={totalRooms}
          remainingRooms={remainingRooms}
          />
        <Spacer />
        <RoomList
          rooms={filteredRooms}
          showDeleteIcon={showDeleteIcon}
          cancelDeleteAction={() => setShowDeleteIcon(false)}
        />
        <FAB.Group
          open={open}
          icon={open ? 'window-close' : 'dots-vertical'}
          actions={[
            {
              icon: 'plus',
              label: 'Add room',
              onPress: () => console.log('Add room pressed'),
            },
            {
              icon: 'delete',
              label: 'Delete room',
              onPress: () => setShowDeleteIcon(true),
            },
            {
              icon: 'calculator-variant',
              label: 'Calculate rent',
              small: false,
              onPress: handleOpenInformationDialog,
            },
          ]}
          onStateChange={onStateChange}
          fabStyle={styles.fabIcon}
        />
      </Portal>
      <Dialog>
        <Dialog.Information
          visible={showInformationDialog}
          hideDialog={hideInformationDialog}
          title="Rent Information"
        >
          <RentDetail label="H1R1" rent={2200} electricity={745} containerStyle={{ backgroundColor: '#72a3f2' }} />
          <RentDetail label="H1R2" rent={2000} electricity={805} containerStyle={{ backgroundColor: '#6d8cbd' }} />
        </Dialog.Information>
      </Dialog>
    </Provider>
  );
};

const useStyles = makeStyles((theme, props) => ({
  fabIcon: {
    backgroundColor: theme.colors.primary,
  },
}));

export default HouseDetailScreen;
