import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import { View } from 'react-native';

import { theme } from './config';
import { HouseNavigator, AppNavigator } from './navigation';
import { Screen, NumericInput, Text, Heading } from './components';
import { HouseDetailScreen } from './screens';

export default () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Screen>
        <AppNavigator />
      </Screen>
    </NavigationContainer>
  </ThemeProvider>
);
