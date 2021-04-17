import React from 'react';
import { Text as TextNE, makeStyles } from 'react-native-elements';

const Text = (props) => {
  const styles = useStyles(props);

  const { children, style } = props;

  return (
    <TextNE style={[styles, style]}>{children}</TextNE>
  );
}

const useStyles = makeStyles((theme, props) => ({
  opacity: props.isLight ? 0.7 : 1,
  fontSize: props.isSmaller ? 16 : theme.Text.style.fontSize,
}));

export default Text;
