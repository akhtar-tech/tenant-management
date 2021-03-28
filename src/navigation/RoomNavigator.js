import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';

import { routes } from '../config';
import { RoomDetailScreen } from '../screens';

const Tab = createMaterialTopTabNavigator();


const Activity = () => (
  <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
    <Text>Activity Screen</Text>
  </View>
);

const RoomNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={routes.ROOM_DETAIL}
      component={RoomDetailScreen}
      options={{ tabBarLabel: 'Room Detail' }}
    />
    <Tab.Screen
      name={routes.ACTIVITY}
      component={Activity}
      options={{ tabBarLabel: 'Activity' }}
    />
  </Tab.Navigator>
);

export default RoomNavigator;
