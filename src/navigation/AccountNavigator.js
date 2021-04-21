import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MessagesScreen, AccountScreen } from '../screens';
import { routes } from '../config';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.ACCOUNT}
      component={AccountScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={routes.MY_MESSAGES}
      options={{
        title: 'My Messages',
      }}
      component={MessagesScreen}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
