import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { makeStyles } from 'react-native-elements';

const Icon = (props) => {
  const { name, size, color, onPress, containerStyle, ...restProps } = props;
  const styles = useStyles(props);

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
        <MaterialCommunityIcons
          name={name}
          size={size || 24}
          color={color || 'white'}
          {...restProps}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={containerStyle}>
      <MaterialCommunityIcons
        name={name}
        size={size || 24}
        color={color || 'white'}
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
