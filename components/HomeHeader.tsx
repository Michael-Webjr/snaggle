// components/HomeHeader.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

export default function HomeHeader() {
  
  // Function handlers for button presses
  const handleLocationPress = () => {
    console.log('Location pressed - could open location picker');
    // TODO: Open location selection modal
  };

  const handleSearchPress = () => {
    console.log('Search pressed');
    // TODO: Navigate to search screen
  };

  const handleNotificationPress = () => {
    console.log('Notifications pressed');
    // TODO: Navigate to notifications
  };

  return (
    <View style={styles.container}>
      
      {/* Left side: Location */}
      <TouchableOpacity 
        style={styles.locationContainer}
        onPress={handleLocationPress}
        // activeOpacity: How transparent button becomes when pressed
        activeOpacity={0.7}
      >
        <MaterialIcons 
          name="location-on" 
          size={20} 
          color={colors.purple.dark} 
        />
        <View style={styles.locationTextContainer}>
          <Text style={styles.locationText}>Highland Apartments</Text>
          {/* This little icon shows users they can tap to change location */}
          <MaterialIcons 
            name="keyboard-arrow-down" 
            size={16} 
            color="#6B7280" 
          />
        </View>
      </TouchableOpacity>

      {/* Right side: Icons */}
      <View style={styles.iconsContainer}>
        
        {/* Search Icon */}
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={handleSearchPress}
          activeOpacity={0.7}
        >
          <MaterialIcons 
            name="search" 
            size={24} 
            color="#6B7280" 
          />
        </TouchableOpacity>

        {/* Notification Icon */}
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={handleNotificationPress}
          activeOpacity={0.7}
        >
          <MaterialIcons 
            name="notifications-none" 
            size={24} 
            color="#6B7280" 
          />
          
          {/* Notification badge (red dot) - shows when user has unread notifications */}
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: row = items sit horizontally (location | icons)
    flexDirection: 'row',
    // justifyContent: space-between = push items to opposite ends
    justifyContent: 'space-between',
    // alignItems: center = vertically center everything
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
    // Bottom border for subtle separation
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex: 1 = take up available space (pushes icons to right)
    flex: 1,
  },
  
  locationTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginRight: 4,
  },
  
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: space between icon buttons
    gap: 12,
  },
  
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20, // Makes it circular
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    // position: relative = allows absolute positioning of children (badge)
    position: 'relative',
  },
  
  notificationBadge: {
    // position: absolute = position relative to parent (iconButton)
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4, // Makes it circular
    backgroundColor: '#EF4444', // Red color
  },
});

/*
LEARNING NOTES:

1. **TouchableOpacity**: Makes any View tappable with press animation
   - activeOpacity: How transparent it becomes when pressed (0.7 = 70% opacity)

2. **Flexbox Layout**:
   - flexDirection: 'row' = horizontal layout
   - justifyContent: 'space-between' = spread items apart
   - alignItems: 'center' = center items vertically
   - flex: 1 = take up available space

3. **Icon Buttons**:
   - Circular background (borderRadius = width/2)
   - Consistent size (40x40)
   - Subtle background color

4. **Notification Badge**:
   - position: 'absolute' = position relative to parent
   - Small red circle in top-right corner
   - Common UI pattern for unread indicators

5. **Color Strategy**:
   - Purple for brand elements (location icon)
   - Gray for secondary actions (search, notifications)
   - Consistent with your color palette

This header pattern is used in most successful marketplace apps!
*/