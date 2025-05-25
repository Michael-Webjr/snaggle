// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { colors } from '../styles/colors';
import type { MainTabScreenProps } from '../navigation/types';

// Import components we'll create
import HomeHeader from '../components/HomeHeader';
import CategoryGrid from '../components/CategoryGrid';
import RecentlyAdded from '../components/RecentlyAdded';
import SuggestedForYou from '../components/SuggestedForYou';

type Props = MainTabScreenProps<'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      {/* ScrollView: Makes the entire screen scrollable */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false} // Hide scroll bar for cleaner look
      >
        
        {/* Header with location and icons */}
        <HomeHeader />
        
        {/* Categories section */}
        <CategoryGrid />
        
        {/* Recently Added section */}
        <RecentlyAdded />
        
        {/* Suggested For You section */}
        <SuggestedForYou />
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // Light gray background like in the design
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20, // Extra space at bottom so content isn't cut off
  },
});

/*
LEARNING NOTES:

1. **SafeAreaView**: Handles iPhone notch automatically
2. **ScrollView**: Makes content scrollable when it's longer than screen
3. **contentContainerStyle**: Styles the content inside ScrollView (not the ScrollView itself)
4. **showsVerticalScrollIndicator**: false = hide the scroll bar
5. **Component Structure**: Breaking big screen into smaller, manageable components

Why break into components?
- Easier to understand and maintain
- Reusable in other parts of app
- Each component has one clear purpose
- Team development friendly
*/