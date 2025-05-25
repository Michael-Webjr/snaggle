// navigation/types.ts
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// Root Stack Navigator types
export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

// Main Tab Navigator types  
export type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  AddListing: undefined;
  Messages: undefined;
  Profile: undefined;
};

// Screen props types for type-safe navigation
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type MainTabScreenProps<Screen extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

// Navigation prop types for useNavigation hook
export type RootStackNavigationProp = RootStackScreenProps<keyof RootStackParamList>['navigation'];
export type MainTabNavigationProp = MainTabScreenProps<keyof MainTabParamList>['navigation'];

// Global navigation types declaration
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}