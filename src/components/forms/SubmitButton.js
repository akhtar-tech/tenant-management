import React from 'react';
import { makeStyles } from 'react-native-elements';
import { useFormikContext } from 'formik';

import Button from '../Button';

const SubmitButton = (props) => {
  const styles = useStyles(props);
  const { handleSubmit } = useFormikContext();

  const { title } = props;

  return (
    <Button
      title={title}
      onPress={handleSubmit}
      containerStyle={styles.container}
      titleStyle={styles.title}
    />
  );
}

const useStyles = makeStyles((theme, props) => ({
  title: props.variant === 'secondary' ? { color: theme.colors.primary } : {},
  container: {
    ...(props.variant === 'secondary'
      ? { borderColor: theme.colors.primary, borderWidth: 2 }
      : { backgroundColor: theme.colors.primary }
    ),
    borderRadius: 20,
    width: '100%',
  },
}));

export default SubmitButton;