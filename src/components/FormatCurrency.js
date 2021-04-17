import React from 'react';
import { View, StyleSheet } from 'react-native';
import NumberFormat from 'react-number-format';

import Text from './Text';
import Spacer from './Spacer';

const FormatCurrency = ({ label, value, textStyle }) => (
  <View style={styles.container}>
    <Text isLight style={textStyle}>{label}</Text>
    <Spacer horizontal />
    <NumberFormat
      value={value}
      renderText={val => <Text style={textStyle}>{val}</Text>}
      displayType="text"
      thousandSeparator
      thousandsGroupStyle="lakh"
      prefix="₹"
    />
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

export default FormatCurrency;
