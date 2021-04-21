import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { makeStyles } from 'react-native-elements';

const Icon = (props) => {
  const {
    name,
    backgroundColor,
    size = 24,
    color = 'white',
    onPress,
    containerStyle,
    ...restProps
  } = props;

  const styles = useStyles(props);

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle, { backgroundColor }]}>
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color}
          {...restProps}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={[containerStyle, { backgroundColor }]}>
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={color}
        {...restProps}
      />
    </View>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    borderRadius: 50,
  },
}));

export default Icon;
