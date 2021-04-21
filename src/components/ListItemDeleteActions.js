import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { makeStyles } from 'react-native-elements';

import Icon from './Icon';

const ListItemDeleteActions = ({ onPress }) => {
  const styles = useStyles();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="trash-can" size={35} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: 70,
    backgroundColor: theme.colors.danger,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default ListItemDeleteActions;