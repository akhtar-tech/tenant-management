import React from 'react';
import { Button, Dialog as _Dialog } from 'react-native-paper';

import { theme } from '../../config';

const ActionDialog = ({
  visible,
  hideDialog,
  title,
  children,
  button: {
    primary,
    secondary,
  },
}) => (
  <_Dialog visible={visible} onDismiss={hideDialog}>
    <_Dialog.Title>{title}</_Dialog.Title>
    <_Dialog.Content>
      {children}
    </_Dialog.Content>
    <_Dialog.Actions>
      <Button
        onPress={secondary.onPress}
        uppercase={false}
        color={secondary.color || theme.colors.dark}
        labelStyle={{ fontSize: 18 }}
      >
        {secondary.label}
      </Button>
      <Button
        onPress={primary.onPress}
        uppercase={false}
        color={primary.color || theme.colors.primary}
        labelStyle={{ fontSize: 18 }}
      >
        {primary.label}
      </Button>
    </_Dialog.Actions>
  </_Dialog>
);

export default ActionDialog;
