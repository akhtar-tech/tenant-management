import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';
import Spacer from './Spacer';

const LabelRow = ({ label, children }) => (
  <View style={styles.container}>
    <Text isLight>{label}</Text>
    <Spacer horizontal />
    <Text>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default LabelRow;
