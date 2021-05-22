import React from 'react';
import { View } from 'react-native';

import Heading from '../Heading';
import { makeStyles } from '../../hoc';

const FormHeadline = ({ label, children }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Heading>{label}</Heading>
      {children}
    </View>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
}));

export default FormHeadline;
