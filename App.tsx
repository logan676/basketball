import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  type Theme,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import NewsScreen from './src/screens/NewsScreen';
import ScoresScreen from './src/screens/ScoresScreen';
import TeamsScreen from './src/screens/TeamsScreen';
import PlayersScreen from './src/screens/PlayersScreen';
import MoreScreen from './src/screens/MoreScreen';
import NewsDetailScreen from './src/screens/NewsDetailScreen';
import PlayerDetailScreen from './src/screens/PlayerDetailScreen';
import TeamDetailScreen from './src/screens/TeamDetailScreen';
import GameDetailScreen from './src/screens/GameDetailScreen';
import { colors } from './src/theme/colors';
import type { RootStackParamList, TabParamList } from './src/navigation/types';

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const tabIcons: Record<keyof TabParamList, keyof typeof Ionicons.glyphMap> = {
  News: 'newspaper-outline',
  Scores: 'stats-chart-outline',
  Teams: 'people-outline',
  Players: 'person-outline',
  More: 'apps-outline',
};

const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};

const TabsNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textMuted,
      tabBarIcon: ({ color, size }) => (
        <Ionicons name={tabIcons[route.name as keyof TabParamList]} size={size} color={color} />
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
    })}
  >
    <Tab.Screen name="News" component={NewsScreen} />
    <Tab.Screen name="Scores" component={ScoresScreen} />
    <Tab.Screen name="Teams" component={TeamsScreen} />
    <Tab.Screen name="Players" component={PlayersScreen} />
    <Tab.Screen name="More" component={MoreScreen} />
  </Tab.Navigator>
);

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTitleStyle: {
              fontWeight: '600',
              color: colors.text,
            },
            headerTintColor: colors.text,
          }}
        >
          <Stack.Screen
            name="Tabs"
            component={TabsNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetailScreen}
            options={{ title: 'Article' }}
          />
          <Stack.Screen
            name="PlayerDetail"
            component={PlayerDetailScreen}
            options={{ title: 'Player' }}
          />
          <Stack.Screen
            name="TeamDetail"
            component={TeamDetailScreen}
            options={{ title: 'Team' }}
          />
          <Stack.Screen
            name="GameDetail"
            component={GameDetailScreen}
            options={{ title: 'Game' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
