import React from 'react';
import { View } from 'react-native';
import { Headline } from 'react-native-paper';
import { makeStyles } from 'react-native-elements';

const FormHeadline = ({ label, children }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Headline>{label}</Headline>
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
