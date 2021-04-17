import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { routes } from '../config';
import HouseNavigator from './HouseNavigator';
import { AddHouseScreen, AccountScreen } from '../screens';
import { PlusButton, Icon } from '../components';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator tabBarOptions={{ labelStyle: { fontSize: 14 } }}>
    <Tab.Screen
      name={routes.HOUSE_LIST}
      component={HouseNavigator}
      options={{
        tabBarLabel: 'Houses',
        tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />
      }}
    />
    <Tab.Screen
      name={routes.ADD_HOUSE}
      component={AddHouseScreen}
      options={({ navigation }) => ({
        tabBarButton: () => <PlusButton onPress={() => navigation.navigate(routes.ADD_HOUSE)} />,
        tabBarLabel: '',
        tabBarIcon: ({ color }) => <Icon name="plus-circle" color={color} size={60} />
      })}
    />
    <Tab.Screen
      name={routes.ACCOUNT}
      component={AccountScreen}
      options={{
        tabBarLabel: 'Accounts',
        tabBarIcon: ({ color, size }) => <Icon name="account" color={color} size={size} />
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
