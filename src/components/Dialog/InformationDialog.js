import React from 'react';
import { Subheading, Button, Dialog as PaperDialog } from 'react-native-paper';

const InformationDialog = ({
  visible,
  hideDialog,
  title,
  children,
}) => (
  <PaperDialog visible={visible} onDismiss={hideDialog}>
    <PaperDialog.Title>{title}</PaperDialog.Title>
    <PaperDialog.Content>
      {children}
    </PaperDialog.Content>
    <PaperDialog.Actions>
      <Button onPress={hideDialog} uppercase={false} color="black" labelStyle={{ fontSize: 18 }}>Okay</Button>
    </PaperDialog.Actions>
  </PaperDialog>
);

export default InformationDialog;
