import React from 'react';
import { Text, makeStyles } from 'react-native-elements';

const Caption = (props) => {
  const styles = useStyles(props);

  const { children, isItalic, style } = props;

  return (
    <Text
      style={[
        styles,
        { fontStyle: isItalic ? 'italic' : 'normal' },
        style
      ]}
    >
      {children}
    </Text>
  );
}

const useStyles = makeStyles((theme, props) => ({
  opacity: props.isLight ? 0.7 : 1,
  fontSize: 14,
}));

export default Caption;
