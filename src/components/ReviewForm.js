import React from 'react';
import { Subheading, Provider } from 'react-native-paper';

import Dialog from './dialog';

const ReviewForm = ({ visible, hideDialog }) => {
  return (
    <Provider>
      <Dialog>
        <Dialog.Information title="Review" visible={visible} hideDialog={hideDialog}>
          <Subheading>hamid</Subheading>
        </Dialog.Information>
      </Dialog>
    </Provider>
  );
}

export default ReviewForm;
