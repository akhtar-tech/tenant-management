import React from 'react';
import { BoxShadow } from 'react-native-shadow';


const Shadow = (props) => {
  const styles = {
    width: 150,
    height: 150,
    color: '#8c8c8c',
    border: 8,
    radius: 25,
    opacity: 0.17,
  };

  return (
    <BoxShadow setting={styles}>
      {props.children}
    </BoxShadow>
  );
};

export default Shadow;