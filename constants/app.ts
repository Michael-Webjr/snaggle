// constants/app.ts

/**
 * Application configuration constants
 * Centralized configuration for app-wide settings
 */

export const APP_CONFIG = {
  name: 'Snaggle',
  tagline: 'Your roommate marketplace',
  version: '1.0.0',
  buildNumber: 1,
} as const;

export const ANIMATION_DURATIONS = {
  fast: 200,
  medium: 300,
  slow: 500,
  title: 3000,
  slogan: 7500,
} as const;

export const SCREEN_NAMES = {
  // Root Stack
  LOGIN: 'Login',
  MAIN: 'Main',
  
  // Main Tabs
  HOME: 'Home',
  SEARCH: 'Search',
  ADD_LISTING: 'AddListing',
  MESSAGES: 'Messages',
  PROFILE: 'Profile',
} as const;

export const SOCIAL_PROVIDERS = {
  GOOGLE: 'google',
  APPLE: 'apple',
  FACEBOOK: 'facebook',
} as const;

export const API_ENDPOINTS = {
  // TODO: Replace with actual API endpoints when implementing backend
  BASE_URL: __DEV__ ? 'http://localhost:3000' : 'https://api.snaggle.app',
  AUTH: '/auth',
  LISTINGS: '/listings',
  MESSAGES: '/messages',
  USERS: '/users',
} as const;

export const STORAGE_KEYS = {
  USER_TOKEN: '@snaggle:userToken',
  USER_DATA: '@snaggle:userData',
  ONBOARDING_COMPLETED: '@snaggle:onboardingCompleted',
} as const;