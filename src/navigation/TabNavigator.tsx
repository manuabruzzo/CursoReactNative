import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { HistoryScreen } from '../screens';
import { colors } from '../utils/theme';
import BookStack from './BookStack';
import CharacterStack from './CharacterStack';

type Route = RouteProp<Record<string, object | undefined>, string>;
const Tab = createBottomTabNavigator();

const getIconName = (routeName: string) => {
  let iconName = '';
  switch (routeName) {
    case 'BookTab':
      iconName = 'book';
      break;
    case 'CharacterTab':
      iconName = 'person';
      break;
    case 'HistoryTab':
      iconName = 'history';
      break;
    default:
      iconName = 'help-outline';
      break;
  }
  return iconName;
};

const navigatorScreenOptions = ({ route }: { route: Route }) => ({
  tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
    const iconName = getIconName(route.name);
    // const iconSize = focused ? size * 1.2 : size;
    const iconSize = focused ? size : size;
    return <MaterialIcon name={iconName} size={iconSize} color={color} />;
  },
  tabBarallowFontScaling: false,
  tabBarActiveTintColor: colors.red,
  tabBarActiveBackgroundColor: colors.yellow,
  tabBarInactiveTintColor: colors.yellow,
  tabBarBackgroundColor: colors.red,

  tabBarStyle: {
    backgroundColor: colors.red,
    paddingTop: 3,
  },
  tabBarLabelStyle: {
    fontSize: 16,
  },
  headerShown: false,
});

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={navigatorScreenOptions}>
      <Tab.Screen name="BookTab" component={BookStack} options={{ title: 'Books' }} />
      <Tab.Screen name="CharacterTab" component={CharacterStack} options={{ title: 'Characters' }} />
      <Tab.Screen name="HistoryTab" component={HistoryScreen} options={{ title: 'History' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
