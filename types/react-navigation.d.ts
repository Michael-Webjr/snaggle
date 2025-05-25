// types/react-navigation.d.ts
import type { ComponentType } from 'react';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

declare module '@react-navigation/native-stack' {
  export function createNativeStackNavigator<ParamList = Record<string, object | undefined>>(): {
    Navigator: ComponentType<{
      children?: React.ReactNode;
      screenOptions?: NativeStackNavigationOptions | ((props: any) => NativeStackNavigationOptions);
      initialRouteName?: keyof ParamList;
    }>;
    Screen: ComponentType<{
      name: string;
      component: ComponentType<any>;
      options?: NativeStackNavigationOptions | ((props: any) => NativeStackNavigationOptions);
    }>;
  };
}

declare module '@react-navigation/bottom-tabs' {
  export function createBottomTabNavigator<ParamList = Record<string, object | undefined>>(): {
    Navigator: ComponentType<{
      children?: React.ReactNode;
      screenOptions?: BottomTabNavigationOptions | ((props: any) => BottomTabNavigationOptions);
      initialRouteName?: keyof ParamList;
    }>;
    Screen: ComponentType<{
      name: string;
      component: ComponentType<any>;
      options?: BottomTabNavigationOptions | ((props: any) => BottomTabNavigationOptions);
    }>;
  };
}