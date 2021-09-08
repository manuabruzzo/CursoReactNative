import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BookListScreen } from '../screens';

const Stack = createNativeStackNavigator();

const BookStack = () => {
  return (
    <Stack.Navigator initialRouteName="Books" screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Experimental" component={ExperimentalScreen} /> */}
      <Stack.Screen name="Books" component={BookListScreen} />
    </Stack.Navigator>
  );
};

export default BookStack;
