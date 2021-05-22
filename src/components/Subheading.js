import React from 'react';

import Text from './Text';
import { makeStyles } from '../hoc';

const Subheading = (props) => {
  const styles = useStyles(props);

  const { children, style, ...restProps } = props;

  return (
    <Text
      style={[styles.text, style]}
      {...restProps}
    >
      {children}
    </Text>
  );
}

const useStyles = makeStyles((theme, props) => ({
  text: {
    fontSize: theme.fontSize.subheading,
  },
}));

export default Subheading;
