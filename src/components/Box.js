import React from 'react';
import { TouchableOpacity } from 'react-native';
import { makeStyles, Text } from 'react-native-elements';

import Shadow from './Shadow';

const Box = (props) => {
  const styles = useStyles(props);

  return (
    <Shadow>
      <TouchableOpacity style={styles.box} onPress={props.onPress}>
        <Text style={styles.text}>{props.label}</Text>
      </TouchableOpacity>
    </Shadow>
  );
};

const useStyles = makeStyles((theme, props) => ({
  box: {
    width: 150,
    height: 150,
    backgroundColor: props.variant === 'secondary' ? '#f26868' : '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: props.variant === 'secondary' ? '#fff' : '#000',
  },
}));

export default Box;