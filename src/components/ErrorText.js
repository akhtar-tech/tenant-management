import React from 'react';
import { makeStyles } from 'react-native-elements';

import Text from './Text';

const ErrorText = ({ error, visible }) => {
  const styles = useStyles();

  if (!visible || !error) return null;

  return (
    <Text style={styles.error}>{error}</Text>
  );
}

const useStyles = makeStyles((theme, props) => ({
  error: {
    color: theme.colors.danger,
  },
}));

export default ErrorText;