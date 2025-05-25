// components/CategoryGrid.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

// TypeScript interface: Define what a category looks like
interface Category {
  id: string;
  letter: string;
  name: string;
  color: string;
}

// Category data - matches the design
const categories: Category[] = [
  { id: '1', letter: 'G', name: 'Groceries', color: '#8B5CF6' },    // Purple
  { id: '2', letter: 'H', name: 'Household', color: '#06B6D4' },    // Cyan  
  { id: '3', letter: 'K', name: 'Kitchen', color: '#10B981' },      // Green
  { id: '4', letter: 'E', name: 'Electronics', color: '#F59E0B' },  // Yellow
  { id: '5', letter: 'T', name: 'Toiletries', color: '#EF4444' },   // Red
];

export default function CategoryGrid() {
  
  // Function to handle category selection
  const handleCategoryPress = (category: Category) => {
    console.log(`Selected category: ${category.name}`);
    // TODO: Navigate to category screen or filter products
  };

  return (
    <View style={styles.container}>
      
      {/* Section Title */}
      <Text style={styles.sectionTitle}>Categories</Text>
      
      {/* Grid of category buttons */}
      <View style={styles.grid}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id} // React needs unique key for list items
            style={[
              styles.categoryButton,
              { backgroundColor: category.color } // Dynamic background color
            ]}
            onPress={() => handleCategoryPress(category)}
            activeOpacity={0.8}
          >
            
            {/* Large letter (G, H, K, etc.) */}
            <Text style={styles.categoryLetter}>
              {category.letter}
            </Text>
            
            {/* Category name below */}
            <Text style={styles.categoryName}>
              {category.name}
            </Text>
            
          </TouchableOpacity>
        ))}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'white',
    marginTop: 8, // Small gap from header
  },
  
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  
  grid: {
    // flexDirection: row = horizontal layout
    flexDirection: 'row',
    // justifyContent: space-between = spread buttons evenly
    justifyContent: 'space-between',
    // flexWrap: wrap = if buttons don't fit, wrap to next line
    flexWrap: 'wrap',
  },
  
  categoryButton: {
    // Calculate width: 5 buttons in a row with gaps
    // Screen width minus padding and gaps, divided by 5
    width: '18%', // Slightly less than 20% to account for gaps
    aspectRatio: 1, // Makes height equal to width (square buttons)
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    
    // Shadow for Android
    elevation: 3,
  },
  
  categoryLetter: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
    marginBottom: 4,
  },
  
  categoryName: {
    fontSize: 10,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});

/*
LEARNING NOTES:

1. **Array.map()**: JavaScript method to create UI from data
   - Takes each item in array and returns a component
   - Must include unique 'key' prop for React performance

2. **Dynamic Styles**: 
   - [styles.categoryButton, { backgroundColor: category.color }]
   - Combines static styles with dynamic ones
   - Square brackets merge multiple style objects

3. **Interface Definition**:
   - TypeScript interface ensures data consistency
   - Helps catch errors and provides autocomplete

4. **Responsive Width**:
   - width: '18%' = 5 buttons fit in row with gaps
   - aspectRatio: 1 = height equals width (perfect squares)

5. **Color Strategy**:
   - Each category has distinct color
   - White text on colored background for readability
   - Colors match common app design patterns

6. **Shadow Effects**:
   - shadowColor/shadowOffset for iOS
   - elevation for Android
   - Makes buttons feel raised/tappable

This grid pattern is perfect for category navigation in marketplace apps!
*/