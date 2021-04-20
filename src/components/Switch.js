import React from 'react';
import { View } from 'react-native';
import { Switch as _Switch, Subheading } from 'react-native-paper';
import { makeStyles } from 'react-native-elements';

const Switch = (props) => {
  const styles = useStyles();

  const { label, style, ...restProps } = props;

  return (
    <View style={styles.container}>
      <Subheading>{label}</Subheading>
      <_Switch
        color={styles.primary.color}
        {...restProps}
      />
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  primary: { color: theme.colors.primary },
}));

export default Switch;
