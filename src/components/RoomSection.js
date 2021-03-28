import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Text from './Text';

const RoomSection = ({ label, children }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>{label}</Text>
      <AntDesign name="edit" size={24} color="black" />
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