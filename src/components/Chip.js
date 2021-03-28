import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Badge } from 'react-native-elements'

const Chip = ({ text, variant = 'primary' }) => {
  return (
    <Badge
      status={variant}
      value={text}
      textStyle={{ fontSize: 14 }}
      badgeStyle={{ paddingVertical: 12, paddingHorizontal: 2, borderRadius: 50, }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default Chip;