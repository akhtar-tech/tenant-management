import React from 'react';
import { View, StyleSheet } from 'react-native';
import { makeStyles } from 'react-native-elements';

import Text from './Text';
import FormatCurrency from './FormatCurrency';

const RentDetail = (props) => {
  const styles = useStyles(props);

  const { label, rent, electricity, containerStyle } = props;
  const totalRent = Number(rent) + Number(electricity);

  return (
    <View style={[styles.topContainer, containerStyle]}>
      {label ? <Text>Room: {label}</Text> : null}
      <View style={styles.container}>
        <View>
          <FormatCurrency label="Rent Bill:" value={rent} textStyle={styles.textStyle} />
          <FormatCurrency label="Electricity Bill:" value={electricity} textStyle={styles.textStyle} />
        </View>
        <View>
          <FormatCurrency label="Total Rent:" value={totalRent} textStyle={styles.textStyle} />
        </View>
      </View>
    </View>
  );
}

const useStyles = makeStyles((theme, props) => ({
  topContainer: {
    marginTop: props.label ? 20 : 0,
    padding: props.label ? 10 : 0,
    borderRadius: props.label ? 10 : 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: props.label ? 5 : 0,
  },
  textStyle: {
    color: props.label ? 'white' : 'black',
    opacity: 1,
  },
}));

export default RentDetail;
