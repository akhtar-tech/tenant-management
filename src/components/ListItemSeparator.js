import React from 'react';
import { View } from 'react-native';
import { makeStyles } from 'react-native-elements';

const ListItemSeparator = () => {
  const styles = useStyles();

  return (
    <View style={styles.separator} />
  );
}

const useStyles = makeStyles((theme) => ({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.light,
  },
}));

export default ListItemSeparator;