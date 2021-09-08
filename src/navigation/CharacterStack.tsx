import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharacterListScreen } from '../screens';

const Stack = createNativeStackNavigator();

const CharacterStack = () => {
  return (
    <Stack.Navigator initialRouteName="Characters" screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Experimental" component={ExperimentalScreen} /> */}
      <Stack.Screen name="Characters" component={CharacterListScreen} />
    </Stack.Navigator>
  );
};

export default CharacterStack;
