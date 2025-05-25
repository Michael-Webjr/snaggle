// App.tsx
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import LoginScreen from './screens/LoginScreen';
import MainTabNavigator from './navigation/MainTabNavigator';

// Import components
import ErrorBoundary from './components/ErrorBoundary';

// Import types and constants
import type { RootStackParamList } from './navigation/types';
import { SCREEN_NAMES } from './constants/app';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="light" backgroundColor="transparent" translucent />
          <Stack.Navigator 
            screenOptions={{ 
              headerShown: false,
              gestureEnabled: true,
              animation: 'slide_from_right',
            }}
            initialRouteName={SCREEN_NAMES.LOGIN}
          >
            <Stack.Screen 
              name={SCREEN_NAMES.LOGIN} 
              component={LoginScreen}
              options={{
                animation: 'fade',
              }}
            />
            <Stack.Screen 
              name={SCREEN_NAMES.MAIN} 
              component={MainTabNavigator}
              options={{
                animation: 'slide_from_right',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}