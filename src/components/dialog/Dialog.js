import React from 'react';
import { Provider, Portal } from 'react-native-paper';

import InformationDialog from './InformationDialog';
import DeleteDialog from './DeleteDialog';
import ContentDialog from './ContentDialog';

const Dialog = ({ children, provider }) => {
  if (provider) {
    return (
      <Provider>
        <Portal>
          {children}
        </Portal>
      </Provider>
    );
  }

  return (
    <Portal>
      {children}
    </Portal>
  );
}

Dialog.Information = InformationDialog;
Dialog.Delete = DeleteDialog;
Dialog.Content = ContentDialog;

export default Dialog;