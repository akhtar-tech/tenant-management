import React from 'react';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const UpDownIcon = ({ variant, ...restProps }) => (
  <AntDesign
    name={variant === 'up' ? 'upcircle' : 'downcircle'}
    size={40}
    color="grey"
    style={styles.icon}
    {...restProps}
  />
);

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    bottom: -20,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

export default UpDownIcon;
