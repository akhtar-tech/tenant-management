import React from 'react';

import Text from './Text';
import { makeStyles } from '../hoc';

const Heading = (props) => {
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
    fontSize: theme.fontSize.heading,
  },
}));

export default Heading;
