import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';

import { HouseDetailHeader, RoomList, Spacer } from '../components';
import { houses, rooms } from '../mockData';

const HouseDetailScreen = ({ route }) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

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
        <RoomList rooms={filteredRooms} />
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
              icon: 'pencil',
              label: 'Edit room',
              onPress: () => console.log('Edit room pressed'),
            },
            {
              icon: 'calculator-variant',
              label: 'Check rent',
              small: false,
              onPress: () => console.log('Check rent pressed'),
            },
          ]}
          onStateChange={onStateChange}
        />
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    zIndex: 99,
  },
})

export default HouseDetailScreen;