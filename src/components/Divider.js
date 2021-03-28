import React from 'react';
import { View } from 'react-native';
import { makeStyles } from 'react-native-elements';

const Divider = (props) => {
  const styles = useStyles(props);

  return (
    <View style={styles.container} />
  );
};

const horizontalDividerStyles = {
  width: '90%',
  height: 1,
  marginHorizontal: '1%',
};

const verticalDividerStyles = {
  width: 1,
  height: '90%',
  marginVertical: '1%',
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    backgroundColor: '#8c8c8c',
    ...(props.variant && props.variant === 'vertical') ? verticalDividerStyles : horizontalDividerStyles,
  },
}));

export default Divider;