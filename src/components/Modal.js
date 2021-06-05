import React from 'react';
import Modal_RN from 'react-native-modal';
import { makeStyles } from 'react-native-elements';

import Heading from './Heading';

const Modal = (props) => {
  const styles = useStyles(props);

  const {
    children,
    title,
    isVisible,
    style,
    titleStyle,
    ...restProps
  } = props;

  return (
    <Modal_RN
      isVisible={isVisible}
      style={[styles.modal, style]}
      {...restProps}
    >
      <Heading style={[styles.title, titleStyle]}>{title}</Heading>
      {children}
    </Modal_RN>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    paddingTop: 10,
  },
  title: {
    marginLeft: 10,
  },
}));

export default Modal;
