// components/SuggestedForYou.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProductCard, { Product } from './ProductCard';
import { getProductImage } from '../utils/productImages';

// Mock suggested products data with smart images
const suggestedProducts: Product[] = [
  {
    id: '5',
    title: 'Laundry Detergent Pods',
    price: 2.50,
    quantityLeft: 12,
    image: getProductImage('Laundry Detergent Pods'), // Smart image selection
    seller: 'Alex P.',
  },
  {
    id: '6',
    title: 'Organic Pasta (5 boxes)',
    price: 1.80,
    quantityLeft: 2, // Low stock
    image: getProductImage('Organic Pasta (5 boxes)'), // Smart image selection
    seller: 'Lisa T.',
  },
  {
    id: '7',
    title: 'Hand Sanitizer',
    price: 3.25,
    quantityLeft: 15,
    image: getProductImage('Hand Sanitizer'), // Smart image selection
    seller: 'David L.',
  },
  {
    id: '8',
    title: 'Toilet Paper (24 pack)',
    price: 4.75,
    quantityLeft: 4, // Low stock
    image: getProductImage('Toilet Paper (24 pack)'), // Smart image selection
    seller: 'Rachel W.',
  },
];

export default function SuggestedForYou() {
  
  const handleProductPress = (product: Product) => {
    console.log(`Tapped suggested product: ${product.title}`);
    // TODO: Navigate to product detail screen
  };

  const handleSeeAllPress = () => {
    console.log('See All Suggested pressed');
    // TODO: Navigate to full suggestions list
  };

  return (
    <View style={styles.container}>
      
      {/* Section Header */}
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Suggested For You</Text>
        
        {/* See All Button */}
        <TouchableOpacity 
          onPress={handleSeeAllPress}
          activeOpacity={0.7}
        >
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      
      {/* Grid of Products */}
      <View style={styles.grid}>
        {suggestedProducts.map((product) => (
          <View key={product.id} style={styles.cardContainer}>
            <ProductCard 
              product={product}
              onPress={handleProductPress}
            />
          </View>
        ))}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  
  cardContainer: {
    width: '48%', // Two cards per row with small gap
    marginBottom: 16,
  },
});