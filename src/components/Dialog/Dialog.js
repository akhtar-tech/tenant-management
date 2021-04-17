import React from 'react';
import { Portal } from 'react-native-paper';

import InformationDialog from './InformationDialog';
import DeleteDialog from './DeleteDialog';

const Dialog = ({ children }) => (
  <Portal>
    {children}
  </Portal>
);

Dialog.Information = InformationDialog;
Dialog.Delete = DeleteDialog;

export default Dialog;