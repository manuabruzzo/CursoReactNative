/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { navigationRef } from './src/navigation/controls';
import { NavigationContainer } from '@react-navigation/native';
import { API_URL } from './src/config/envVariables';

const getHarryPotterData = async () => {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const App = () => {
  console.log('API_URL', API_URL);
  console.log(getHarryPotterData);

  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
