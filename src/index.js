import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';

import theme from './theme';
import { HouseNavigator, AppNavigator } from './navigation';
import { Screen } from './components';
import { HouseDetailScreen } from './screens';

export default () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Screen>
        {/* <HouseDetailScreen /> */}
        {/* <HouseNavigator /> */}
        <AppNavigator />
      </Screen>
    </NavigationContainer>
  </ThemeProvider>
);

