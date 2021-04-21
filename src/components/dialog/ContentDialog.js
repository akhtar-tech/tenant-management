import React from 'react';
import { Subheading, Button, Dialog as _Dialog } from 'react-native-paper';

const ActionDialog = ({
  visible,
  hideDialog,
  title,
  content,
  button: {
    primary,
    secondary,
  },
}) => (
  <_Dialog visible={visible} onDismiss={hideDialog}>
    <_Dialog.Title>{title}</_Dialog.Title>
    <_Dialog.Content>
      <Subheading>{content}</Subheading>
    </_Dialog.Content>
    <_Dialog.Actions>
      <Button
        onPress={secondary.onPress}
        uppercase={false}
        color="black"
        labelStyle={{ fontSize: 18 }}
      >
        {secondary.label}
      </Button>
      <Button
        onPress={primary.onPress}
        uppercase={false}
        color="#f26868"
        labelStyle={{ fontSize: 18 }}
      >
        {primary.label}
      </Button>
    </_Dialog.Actions>
  </_Dialog>
);

export default ActionDialog;
