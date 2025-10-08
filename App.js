import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import NewsScreen from './src/screens/NewsScreen';
import ScoresScreen from './src/screens/ScoresScreen';
import TeamsScreen from './src/screens/TeamsScreen';
import PlayersScreen from './src/screens/PlayersScreen';
import MoreScreen from './src/screens/MoreScreen';
import { colors } from './src/theme/colors';

const Tab = createBottomTabNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};

const tabIcons = {
  News: 'newspaper-outline',
  Scores: 'stats-chart-outline',
  Teams: 'people-outline',
  Players: 'person-outline',
  More: 'apps-outline',
};

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.textMuted,
  tabBarIcon: ({ color, size }) => (
    <Ionicons name={tabIcons[route.name]} size={size} color={color} />
  ),
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 4,
  },
  tabBarStyle: {
    height: 70,
    paddingTop: 8,
    backgroundColor: colors.surface,
    borderTopWidth: 0,
    elevation: 15,
    shadowColor: '#00000015',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -2 },
  },
});

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style='dark' />
      <NavigationContainer theme={AppTheme}>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name='News' component={NewsScreen} />
          <Tab.Screen name='Scores' component={ScoresScreen} />
          <Tab.Screen name='Teams' component={TeamsScreen} />
          <Tab.Screen name='Players' component={PlayersScreen} />
          <Tab.Screen name='More' component={MoreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
