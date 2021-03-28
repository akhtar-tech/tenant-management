import React from 'react';
import { View } from 'react-native';
import { makeStyles } from 'react-native-elements';

const Spacer = (props) => {
  const styles = useStyles(props);

  return (
    <View style={styles.container}></View>
  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    ...props.horizontal ? { width: 10 } : { height: 10 }
  },
}));

export default Spacer;