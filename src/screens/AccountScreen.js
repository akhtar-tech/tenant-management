import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { ListItem, Icon, Dialog } from '../components';
import { routes, theme } from '../config';

const menuItems = [
  {
    title: "My Messages",
    icon: {
      name: "email",
      color: theme.colors.medium,
      size: 40,
    },
    route: routes.MY_MESSAGES,
  },
];

const AccountScreen = ({ navigation }) => {
  const [logoutDialog, setLogoutDialog] = useState(false);

  const showDialog = () => setLogoutDialog(true);
  const hideDialog = () => setLogoutDialog(false);

  return (
    <>
      <ListItem
        title="Mohammad Hamid Raza"
        subTitle="raza.hamid09@gmail.com"
        image={require('../assets/Hamid.jpeg')}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item: menuItem }) => (
            <ListItem
              title={menuItem.title}
              IconComponent={<Icon {...menuItem.icon} />}
              onPress={() => navigation.navigate(menuItem.route)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" color={theme.colors.danger} size={40} />}
        onPress={showDialog}
      />
      <Dialog provider>
        <Dialog.Content
          title="Warning!"
          content="Do you want to logout?"
          visible={logoutDialog}
          hideDialog={hideDialog}
          button={{
            primary: {
              label: 'Yes, logout',
              onPress: hideDialog,
            },
            secondary: {
              label: 'No',
              onPress: hideDialog,
            }
          }}
        />
      </Dialog>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: theme.colors.light,
  },
  container: {
    paddingVertical: 30,
  },
})

export default AccountScreen;