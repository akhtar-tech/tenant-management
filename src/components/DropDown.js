import React from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Subheading } from 'react-native-paper';
import { makeStyles } from 'react-native-elements';

const DropDown = (props) => {
  const { value, onChangeItem, items, label, width, ...restProps } = props;
  const styles = useStyles(props);

  return (
    <View style={styles.container}>
      <Subheading>{label}</Subheading>
      <DropDownPicker
        items={items}
        defaultValue={value}
        containerStyle={styles.dropDownContainer}
        style={styles.dropDownComponent}
        itemStyle={styles.itemStyle}
        dropDownStyle={styles.dropDown}
        onChangeItem={onChangeItem}
        multipleText="%d selected"
        {...restProps}
      />
    </View>
  );
}

const useStyles = makeStyles((theme, { variant = 'vertical', width = 60 }) => ({
  container: {
    ...(variant === 'vertical' ? {
      flexDirection: 'column',
    } : {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }),
  },
  dropDownContainer: {
    height: 40,
    width,
  },
  dropDownComponent: {
    backgroundColor: '#fafafa',
  },
  itemStyle: {
    justifyContent: 'flex-start',
  },
  dropDown: {
    backgroundColor: '#fafafa',
  },
}));

export default DropDown;
