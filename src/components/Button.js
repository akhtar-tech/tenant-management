import React from 'react';
import { Button as ButtonRN, makeStyles } from 'react-native-elements';

import Icon from './Icon';

const Button = (props) => {
  const styles = useStyles({ ...props });

  const {
    title,
    titleStyle,
    style,
    containerStyle,
    iconName,
    onPress,
    loading,
    ...restProps
  } = props;

  return (
    <ButtonRN
      title={title}
      icon={<Icon name={iconName} />}
      containerStyle={[styles.container, containerStyle]}
      buttonStyle={[styles.button, style]}
      titleStyle={[styles.title, titleStyle]}
      onPress={onPress}
      loading={loading}
      {...restProps}
    />
  );
}

const useStyles = makeStyles((theme, props) => ({
  container: {
    alignSelf: 'center',
    width: props.width,
    height: props.height,
    borderRadius: props.borderRadius || 50,
  },
  button: {
    backgroundColor: props.backgroundColor,
    padding: 20,
  },
  title: {
    ...props.iconName && props.title && !props.loading ? {
      marginLeft: 10,
      fontWeight: 'bold',
    } : {},
  },
}));

export default Button;
