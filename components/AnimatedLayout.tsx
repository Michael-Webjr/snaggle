// components/AnimatedLayout.tsx - Simplified version
import React from 'react';
import { 
  LayoutAnimation, 
  Platform, 
  UIManager
} from 'react-native';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Custom configurations for LayoutAnimation
const animations = {
  // For elements entering/exiting the screen
  transitionIn: {
    duration: 500,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  },
  // For expanding/collapsing elements
  expand: {
    duration: 300,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.scaleXY,
    },
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: 0.7,
    },
  },
  // For subtle layout adjustments
  subtle: {
    duration: 200,
    create: {
      type: LayoutAnimation.Types.easeOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  },
};

// Helper function to apply layout animations
export const animateLayout = (type: 'transitionIn' | 'expand' | 'subtle' = 'subtle') => {
  LayoutAnimation.configureNext(animations[type]);
};