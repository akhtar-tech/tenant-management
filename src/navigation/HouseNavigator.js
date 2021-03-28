import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RoomNavigator from './RoomNavigator';
import { HouseListingScreen, HouseDetailScreen } from '../screens';
import { routes } from '../config';

const Stack = createStackNavigator();

const HouseNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name={routes.HOUSE_LIST}
      component={HouseListingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.HOUSE_DETAIL}
      component={HouseDetailScreen}
      options={({ route }) => ({
        headerTitle: route.params.houseName
      })}
    />
    <Stack.Screen
      name={routes.ROOM_DETAIL}
      component={RoomNavigator}
      options={({ route }) => ({
        headerTitle: route.params.roomId
      })}
    />
  </Stack.Navigator>
);

export default HouseNavigator;
