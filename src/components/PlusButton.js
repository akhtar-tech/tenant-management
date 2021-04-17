import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { makeStyles } from 'react-native-elements';

const PlusButton = (props) => {
  const styles = useStyles(props);

  const { onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color="white" size={40} />
      </View>
    </TouchableOpacity>
  );
}

const useStyles = makeStyles((theme, props) => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 10,
    backgroundColor: theme.colors.primary,
    bottom: 30,
  },
}));

export default PlusButton;
