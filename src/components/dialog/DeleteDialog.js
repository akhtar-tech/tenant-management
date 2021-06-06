import React from 'react';
import { Subheading, Button, Dialog as PaperDialog } from 'react-native-paper';

const defaultContent = 'Do you want to delete this room? If you do, you can not restore again this room. Although, you can create new one.';

const DeleteDialog = ({ visible, hideDialog, content, onPressOK }) => (
  <PaperDialog visible={visible} onDismiss={hideDialog}>
    <PaperDialog.Title>Warning!</PaperDialog.Title>
    <PaperDialog.Content>
      <Subheading>{content || defaultContent}</Subheading>
    </PaperDialog.Content>
    <PaperDialog.Actions>
      <Button onPress={hideDialog} uppercase={false} color="black" labelStyle={{ fontSize: 18 }}>No</Button>
      <Button onPress={onPressOK} uppercase={false} color="#f26868" labelStyle={{ fontSize: 18 }}>Yes, delete</Button>
    </PaperDialog.Actions>
  </PaperDialog>
);

export default DeleteDialog;