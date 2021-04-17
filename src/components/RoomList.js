import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FAB, Portal, Provider } from 'react-native-paper';

import { routes } from '../config';
import Box from './Box';
import Dialog from './Dialog';
import Icon from './Icon';

const RoomList = (props) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const { showDeleteIcon, cancelDeleteAction } = props;

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <FlatList
        data={props.rooms}
        renderItem={({ item: room }) => (
          <View style={{ marginVertical: 30 }}>
            <Box
              onPress={() => navigation.navigate(routes.ROOM_DETAIL, { roomId: room.id })}
              label={room.id}
              variant={room.allocated ? 'primary' : 'secondary'}
            />
            {showDeleteIcon && (
              <Icon
                name="minus-circle"
                color="red"
                onPress={showDialog}
                containerStyle={{ backgroundColor: 'white', position: 'absolute', top: -4, right: -4 }}
              />
            )}
          </View>
        )}
        keyExtractor={room => room.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
      />
      {(showDeleteIcon && !visible) ? (
        <Portal>
          <FAB
            style={{
              position: 'absolute',
              margin: 16,
              left: 0,
              bottom: 0,
            }}
            label="Click to cancel"
            icon="window-close"
            onPress={cancelDeleteAction}
          />
        </Portal>
      ): null}
      <Dialog>
        <Dialog.Delete visible={visible} hideDialog={hideDialog} />
      </Dialog>
    </Provider>
  );
};

export default RoomList;