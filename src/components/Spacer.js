import React from 'react';
import { View } from 'react-native';
import { makeStyles } from 'react-native-elements';

const Spacer = (props) => {
  const styles = useStyles(props);

  return (
    <View style={styles.container}></View>
  );
};

const useStyles = makeStyles((theme, props) => {
  const space = (props.space || 1) * 10;

  return ({
    container: {
      ...props.horizontal ? { width: space } : { height: space }
    },
  });
});

export default Spacer;