// types/index.ts
/**
 * Type definitions for the Snaggle app
 */

// React imports
import { ReactNode } from 'react';

// Button types
export interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: any;
  textStyle?: any;
}

// Common component props
export interface WithChildrenProps {
  children?: ReactNode;
}

// Social button types
export interface SocialButtonConfig {
  provider: 'google' | 'apple' | 'facebook';
  iconName: string;
  backgroundColor: string;
  textColor: string;
  iconColor: string;
}

// Theme types
export interface AppTheme {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
}