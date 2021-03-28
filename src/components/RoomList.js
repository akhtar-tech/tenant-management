import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { routes } from '../config';
import Box from './Box';

const RoomList = (props) => {
  const navigation = useNavigation();

  return (
    <FlatList
        data={props.rooms}
        renderItem={({ item: room }) => (
          <View style={{ marginVertical: 30 }}>
            <Box
              onPress={() => navigation.navigate(routes.ROOM_DETAIL, { roomId: room.id })}
              label={room.id}
              variant={room.allocated ? 'primary' : 'secondary'}
            />
          </View>
        )}
        keyExtractor={room => room.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
      />
  );
};

export default RoomList;