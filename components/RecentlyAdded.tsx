// components/RecentlyAdded.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ProductCard, { Product } from './ProductCard';
import { getProductImage } from '../utils/productImages';

// Mock data with smart image assignment
const recentProducts: Product[] = [
  {
    id: '1',
    title: 'Costco Paper Towels (12 pack)',
    price: 3.50,
    quantityLeft: 8,
    image: getProductImage('Costco Paper Towels (12 pack)'), // Smart image selection
    seller: 'Sarah M.',
  },
  {
    id: '2',
    title: 'Bulk Coffee Beans',
    price: 4.25,
    quantityLeft: 1, // Low stock - will show in red
    image: getProductImage('Bulk Coffee Beans'), // Smart image selection
    seller: 'Mike R.',
  },
  {
    id: '3',
    title: 'Dishwasher Pods',
    price: 0.75,
    quantityLeft: 20,
    image: getProductImage('Dishwasher Pods'), // Smart image selection
    seller: 'Emma K.',
  },
  {
    id: '4',
    title: 'Organic Bananas',
    price: 1.20,
    quantityLeft: 3, // Low stock - will show in orange
    image: getProductImage('Organic Bananas'), // Smart image selection
    seller: 'John D.',
  },
];

export default function RecentlyAdded() {
  
  const handleProductPress = (product: Product) => {
    console.log(`Tapped product: ${product.title}`);
    // TODO: Navigate to product detail screen
  };

  const handleSeeAllPress = () => {
    console.log('See All pressed');
    // TODO: Navigate to full recently added list
  };

  return (
    <View style={styles.container}>
      
      {/* Section Header */}
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Recently Added</Text>
        
        {/* See All Button */}
        <TouchableOpacity 
          onPress={handleSeeAllPress}
          activeOpacity={0.7}
        >
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      
      {/* Horizontal Scrolling Product List */}
      <ScrollView
        horizontal={true} // Makes ScrollView scroll sideways
        showsHorizontalScrollIndicator={false} // Hide scroll bar
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        {recentProducts.map((product) => (
          <View key={product.id} style={styles.cardContainer}>
            <ProductCard 
              product={product}
              onPress={handleProductPress}
            />
          </View>
        ))}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAFB', // Light gray background
    paddingVertical: 24,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
  },
  
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8B5CF6', // Purple color matching your brand
  },
  
  scrollView: {
    // paddingLeft: add space before first card
    paddingLeft: 20,
  },
  
  scrollContent: {
    // paddingRight: add space after last card
    paddingRight: 20,
  },
  
  cardContainer: {
    width: 160, // Fixed width for each product card
    marginRight: 16, // Space between cards
  },
});

/*
LEARNING NOTES:

1. **Horizontal ScrollView**:
   - horizontal={true} = scroll sideways instead of up/down
   - showsHorizontalScrollIndicator={false} = hide scroll bar
   - Common pattern in marketplace apps

2. **Section Header Pattern**:
   - Title on left, "See All" on right
   - flexDirection: 'row' + justifyContent: 'space-between'
   - Professional UI pattern used everywhere

3. **Mock Data Strategy**:
   - Using Unsplash for placeholder images
   - Real-looking product data for testing
   - Different stock levels to test color logic

4. **Card Spacing**:
   - Fixed width (160px) for consistent sizing
   - marginRight between cards
   - paddingLeft/paddingRight for edge spacing

5. **Image URLs**:
   - Unsplash provides free, high-quality placeholder images
   - ?w=300&h=300&fit=crop = resize to 300x300 and crop to fit
   - Perfect for testing and prototyping

6. **Component Reuse**:
   - Using the same ProductCard component we built
   - Shows the power of reusable components
   - Consistent look across the app

This horizontal scrolling pattern is essential for marketplace apps!
*/