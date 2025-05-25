// components/ProductCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors } from '../styles/colors';

// TypeScript interface: Define what product data looks like
export interface Product {
  id: string;
  title: string;
  price: number;
  quantityLeft: number;
  image: string; // URL or local image path
  seller?: string; // Optional - who's selling it
}

interface ProductCardProps {
  product: Product;
  onPress?: (product: Product) => void; // Optional function when card is tapped
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  
  const handlePress = () => {
    if (onPress) {
      onPress(product);
    }
  };

  // Helper function to format price
  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  // Helper function to format quantity text
  const getQuantityText = (quantity: number) => {
    if (quantity === 1) {
      return '1 left';
    } else if (quantity <= 5) {
      return `${quantity} left`;
    } else {
      return 'In stock';
    }
  };

  // Helper function to get quantity text color (red when low stock)
  const getQuantityColor = (quantity: number) => {
    if (quantity <= 2) {
      return '#EF4444'; // Red for very low stock
    } else if (quantity <= 5) {
      return '#F59E0B'; // Orange for low stock
    } else {
      return '#6B7280'; // Gray for normal stock
    }
  };

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.9}
    >
      
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: product.image }}
          style={styles.image}
          // resizeMode: how image fits in container
          resizeMode="cover"
        />
      </View>
      
      {/* Product Info */}
      <View style={styles.infoContainer}>
        
        {/* Product Title */}
        <Text 
          style={styles.title}
          numberOfLines={2} // Limit to 2 lines, add ... if longer
        >
          {product.title}
        </Text>
        
        {/* Price and Quantity Row */}
        <View style={styles.bottomRow}>
          
          {/* Price */}
          <Text style={styles.price}>
            {formatPrice(product.price)} each
          </Text>
          
          {/* Quantity Left */}
          <Text 
            style={[
              styles.quantity,
              { color: getQuantityColor(product.quantityLeft) }
            ]}
          >
            {getQuantityText(product.quantityLeft)}
          </Text>
          
        </View>
        
      </View>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
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
    marginBottom: 16,
    overflow: 'hidden', // Ensures image respects border radius
  },
  
  imageContainer: {
    width: '100%',
    height: 120, // Fixed height for consistent card sizes
    backgroundColor: '#F3F4F6', // Placeholder color while image loads
  },
  
  image: {
    width: '100%',
    height: '100%',
  },
  
  infoContainer: {
    padding: 12,
  },
  
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 20, // Space between lines for readability
  },
  
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.purple.dark,
  },
  
  quantity: {
    fontSize: 12,
    fontWeight: '500',
    // Color is set dynamically in component
  },
});

/*
LEARNING NOTES:

1. **Reusable Components**: 
   - ProductCard can be used anywhere in the app
   - Takes product data as props
   - Handles its own formatting and display logic

2. **Helper Functions**:
   - formatPrice(): Converts 3.5 to "$3.50"
   - getQuantityText(): Smart text based on stock level
   - getQuantityColor(): Visual feedback for low stock

3. **Image Handling**:
   - Image component with URI source
   - resizeMode: 'cover' = image fills container, may crop
   - Placeholder background while loading

4. **Dynamic Styling**:
   - Quantity text color changes based on stock level
   - Red = urgent (1-2 left), Orange = low (3-5 left), Gray = normal

5. **TypeScript Benefits**:
   - Product interface ensures data consistency
   - Optional props (onPress?) won't break if not provided
   - Autocomplete and error checking

6. **Layout Patterns**:
   - Image on top, info below
   - Bottom row with price left, quantity right
   - numberOfLines prevents text overflow

This ProductCard is the foundation for your entire marketplace!
*/