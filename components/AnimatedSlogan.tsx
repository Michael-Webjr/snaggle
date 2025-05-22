// components/AnimatedSlogan.tsx - With fixed height container
import React, { useRef, useState, useEffect } from 'react';
import { 
  Animated, 
  StyleSheet, 
  Platform,
  Easing,
  View,
  Dimensions,
} from 'react-native';
import { getRandomSlogan } from '../utils/slogans';

const AnimatedSlogan: React.FC = () => {
  const [slogan, setSlogan] = useState<string>('');
  const slideAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  
  // Get screen dimensions to calculate appropriate heights
  const { width } = Dimensions.get('window');
  
  // Calculate a fixed height for the slogan container
  // Enough for two lines at the current font size
  const sloganContainerHeight = 60; // Adjust this value as needed

  useEffect(() => {
    // Set initial slogan
    const initialSlogan = getRandomSlogan();
    setSlogan(initialSlogan);

    // Setup interval for slogan rotation with slide animation
    const sloganInterval = setInterval(() => {
      // Improved combined animation - fade out while sliding out
      Animated.parallel([
        // Slide out
        Animated.timing(slideAnim, {
          toValue: 50, // Don't slide too far for more natural feel
          duration: 800,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
        // Fade out
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 600, // Slightly faster than slide for better feel
          useNativeDriver: true,
        })
      ]).start(() => {
        // Change slogan and reset position to left
        const newSlogan = getRandomSlogan();
        setSlogan(newSlogan);
        slideAnim.setValue(-50);
        opacityAnim.setValue(0); // Start from transparent
        
        // Fade in and slide in from left
        Animated.parallel([
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
            easing: Easing.out(Easing.cubic),
          }),
          Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          })
        ]).start();
      });
    }, 7500);

    return () => {
      clearInterval(sloganInterval);
    };
  }, []);

  if (!slogan) return null;

  return (
    <View style={[styles.sloganContainer, { height: sloganContainerHeight }]}>
      <Animated.Text 
        style={[
          styles.slogan, 
          { 
            transform: [{ translateX: slideAnim }],
            opacity: opacityAnim,
          }
        ]}
        numberOfLines={2}  // Allow maximum of 2 lines
      >
        {slogan}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sloganContainer: {
    // Fixed height container
    justifyContent: 'center', // Center slogan vertically in container
    marginBottom: 32,
  },
  slogan: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 22,
    color: '#000000',
  },
});

export default AnimatedSlogan;