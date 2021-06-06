import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';
import Icon from './Icon';

const RoomSection = ({ label, containerStyle, children, onClickEdit, isDeleteButton = false, onClickDelete }) => (
  <View style={[styles.container, containerStyle]}>
    <View style={styles.header}>
      <Text>{label}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="square-edit-outline" color="black" onPress={onClickEdit} />
        {isDeleteButton ? (
          <View style={{ marginLeft: 10 }}>
            <Icon name="delete-outline" color="black" onPress={onClickDelete} />
          </View>
        ) : null}
      </View>
    </View>
    <View style={styles.body}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexWrap: 'nowrap',
  },
  header: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    backgroundColor: '#fff',
    // height: 200,
    borderRadius: 20,
    padding: 15,
  },
});

export default RoomSection;