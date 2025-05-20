// styles/colors.ts (updated)

/**
 * App color palette
 * Use these color constants throughout the app for consistent styling
 */
export const colors = {
  // Primary colors
  purple: {
    dark: '#4C1D95', // Dark purple for primary buttons and logo
    medium: '#7C3AED', // Medium purple for accents
    light: '#A78BFA', // Light purple for subtle elements
  },
  
  // Background gradient
  gradient: {
    dark: '#1e293b',
    medium: '#64748b',
    light: '#cbd5e1',
  },
  
  // Social media colors
  social: {
    google: '#EA4335',
    facebook: '#3b5998', // Updated to match Spotify's Facebook button
    apple: '#000000',
  },
  
  // Text colors
  text: {
    primary: '#FFFFFF', // White text
    secondary: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white
    tertiary: 'rgba(255, 255, 255, 0.5)', // More transparent white
    dark: '#121212', // Almost black text for better contrast on white
  },
  
  // Utility colors
  utility: {
    divider: 'rgba(255, 255, 255, 0.2)',
    overlay: 'rgba(0, 0, 0, 0.5)',
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    border: 'rgba(0, 0, 0, 0.1)', // Subtle border for light backgrounds
  }
};