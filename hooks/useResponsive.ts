// hooks/useResponsive.ts
import { Dimensions } from 'react-native';

// Get the window dimensions
const { height, width } = Dimensions.get('window');

// Calculate a responsive spacing unit based on screen size
const SPACING_UNIT = Math.min(height, width) * 0.02;

/**
 * Hook to provide responsive dimensions and spacing
 * This centralizes all dimension-related calculations
 */
export const useResponsive = () => {
  return {
    // Screen dimensions
    screenHeight: height,
    screenWidth: width,
    
    // Responsive spacing unit
    spacing: SPACING_UNIT,
    
    // Helper functions for responsive sizes
    fontSize: (size: number) => Math.min(size, width * (size / 400)),
    
    // Returns responsive paddings based on screen size
    getResponsivePadding: () => ({
      horizontal: width * 0.05, // 5% of screen width
      vertical: height * 0.02,  // 2% of screen height
    }),
    
    // Check if device is in landscape mode
    isLandscape: () => width > height,
  };
};

// Export constants for components that don't need the full hook
export { height, width, SPACING_UNIT };