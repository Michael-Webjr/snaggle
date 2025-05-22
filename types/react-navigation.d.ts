// types/react-navigation.d.ts
/// <reference types="react" />

declare module '@react-navigation/native-stack' {
  import { ComponentType } from 'react';
  
  export function createNativeStackNavigator<T = any>(): {
    Navigator: ComponentType<{
      children?: React.ReactNode;
      screenOptions?: any;
      initialRouteName?: string;
    }>;
    Screen: ComponentType<{
      name: string;
      component: ComponentType<any>;
      options?: any;
    }>;
  };
}

declare module '@react-navigation/bottom-tabs' {
  import { ComponentType } from 'react';
  
  export function createBottomTabNavigator<T = any>(): {
    Navigator: ComponentType<{
      children?: React.ReactNode;
      screenOptions?: any;
      initialRouteName?: string;
    }>;
    Screen: ComponentType<{
      name: string;
      component: ComponentType<any>;
      options?: any;
    }>;
  };
}