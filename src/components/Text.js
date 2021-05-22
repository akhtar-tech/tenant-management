import React from 'react';
import { Text as _Text, makeStyles } from 'react-native-elements';

const Text = (props) => {
  const styles = useStyles(props);

  const { children, style } = props;

  return (
    <_Text style={[styles.text, style]}>
      {children}
    </_Text>
  );
}

const useStyles = makeStyles((theme, props) => ({
  text: {
    opacity: props.isLight ? 0.7 : 1,
    fontSize: props.isSmaller ? 16 : theme.Text.style.fontSize,
  },
}));

export default Text;
