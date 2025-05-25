// utils/productImages.ts

/**
 * Product image service with category-specific collections
 * Returns appropriate images based on product category and type
 */

// Category-specific Unsplash collections
const IMAGE_COLLECTIONS = {
  groceries: [
    'https://images.unsplash.com/photo-1567306301408-9b74edc4e85c?w=300&h=300&fit=crop', // Tomatoes
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop', // Bananas
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop', // Avocados
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop', // Bread
    'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop', // Coffee beans
    'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop', // Milk
    'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=300&h=300&fit=crop', // Pasta
  ],
  
  household: [
    'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop', // Paper towels
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop', // Laundry detergent
    'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=300&h=300&fit=crop', // Cleaning supplies
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=300&fit=crop', // Toilet paper
    'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=300&fit=crop', // Air freshener
  ],
  
  kitchen: [
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop', // Dishwasher pods
    'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=300&h=300&fit=crop', // Dish soap
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop', // Kitchen utensils
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop', // Plates/bowls
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop', // Kitchen containers
  ],
  
  electronics: [
    'https://images.unsplash.com/photo-1592659762303-90081d34b277?w=300&h=300&fit=crop', // Phone charger
    'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=300&h=300&fit=crop', // Headphones
    'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=300&h=300&fit=crop', // USB cables
    'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=300&h=300&fit=crop', // Power bank
    'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop', // Tech accessories
  ],
  
  toiletries: [
    'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=300&h=300&fit=crop', // Hand sanitizer
    'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300&h=300&fit=crop', // Shampoo bottles
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop', // Soap
    'https://images.unsplash.com/photo-1574867303119-b052c75b234d?w=300&h=300&fit=crop', // Lotion
    'https://images.unsplash.com/photo-1560472356-ca2d172eb543?w=300&h=300&fit=crop', // Toothbrush
  ],
};

// Product type to category mapping
const PRODUCT_CATEGORY_MAP: Record<string, keyof typeof IMAGE_COLLECTIONS> = {
  // Groceries
  'paper towels': 'household',
  'coffee': 'groceries',
  'bananas': 'groceries',
  'bread': 'groceries',
  'milk': 'groceries',
  'pasta': 'groceries',
  'avocados': 'groceries',
  'tomatoes': 'groceries',
  
  // Household
  'laundry': 'household',
  'detergent': 'household',
  'toilet paper': 'household',
  'cleaning': 'household',
  'air freshener': 'household',
  
  // Kitchen
  'dishwasher': 'kitchen',
  'dish soap': 'kitchen',
  'plates': 'kitchen',
  'bowls': 'kitchen',
  'utensils': 'kitchen',
  'containers': 'kitchen',
  
  // Electronics
  'charger': 'electronics',
  'headphones': 'electronics',
  'cable': 'electronics',
  'power bank': 'electronics',
  'tech': 'electronics',
  
  // Toiletries
  'sanitizer': 'toiletries',
  'shampoo': 'toiletries',
  'soap': 'toiletries',
  'lotion': 'toiletries',
  'toothbrush': 'toiletries',
};

/**
 * Get appropriate image for a product based on its title
 */
export const getProductImage = (productTitle: string): string => {
  const titleLower = productTitle.toLowerCase();
  
  // Find matching category based on keywords in title
  for (const [keyword, category] of Object.entries(PRODUCT_CATEGORY_MAP)) {
    if (titleLower.includes(keyword)) {
      const images = IMAGE_COLLECTIONS[category];
      // Return a random image from the appropriate category
      const randomIndex = Math.floor(Math.random() * images.length);
      return images[randomIndex];
    }
  }
  
  // Default to groceries if no match found
  const defaultImages = IMAGE_COLLECTIONS.groceries;
  const randomIndex = Math.floor(Math.random() * defaultImages.length);
  return defaultImages[randomIndex];
};

/**
 * Get image by specific category (for when you know the category)
 */
export const getImageByCategory = (category: keyof typeof IMAGE_COLLECTIONS): string => {
  const images = IMAGE_COLLECTIONS[category];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

/**
 * Get multiple images for a category (useful for showing variety)
 */
export const getImagesForCategory = (
  category: keyof typeof IMAGE_COLLECTIONS, 
  count: number = 4
): string[] => {
  const images = IMAGE_COLLECTIONS[category];
  const shuffled = [...images].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, images.length));
};

/*
LEARNING NOTES:

1. **Smart Image Matching**: 
   - Analyzes product title for keywords
   - Maps keywords to appropriate categories
   - Returns category-specific images

2. **Fallback Strategy**:
   - If no keywords match, defaults to groceries
   - Prevents broken images or weird mismatches

3. **Random Selection**:
   - Multiple images per category for variety
   - Math.random() picks different image each time

4. **Flexible API**:
   - getProductImage() - automatic based on title
   - getImageByCategory() - when you know the category
   - getImagesForCategory() - for bulk image needs

5. **Easy to Extend**:
   - Add new categories by updating IMAGE_COLLECTIONS
   - Add new keywords by updating PRODUCT_CATEGORY_MAP
   - All centralized in one file

Now your grocery items will actually look like groceries! 🥬🍌
*/