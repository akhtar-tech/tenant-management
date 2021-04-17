import React from 'react';
import { View } from 'react-native';
import { makeStyles } from 'react-native-elements';
import { Badge as _Badge } from 'react-native-paper';

import Text from './Text';

const Badge = (props) => {
  const { label, badgeCount } = props;

  const styles = useStyles(props);

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <_Badge size={30} style={styles.badge}>{badgeCount}</_Badge>
    </View>
  );
};

const useStyles = makeStyles((theme, props) => {
  let backgroundColor = theme.colors.success;
  let color = theme.colors.black;

  if (props.variant === 'error') {
    backgroundColor = theme.colors.danger;
    color = theme.colors.white;
  }

  return ({
    container: {
      alignItems: 'center',
    },
    badge: {
      alignSelf: 'center',
      backgroundColor,
      color,
    },
  });
});

export default Badge;
