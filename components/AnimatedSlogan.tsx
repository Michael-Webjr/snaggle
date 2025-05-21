// components/AnimatedSlogan.tsx - Fixed version
import React, { useRef, useState, useEffect } from 'react';
import { 
  Animated, 
  StyleSheet, 
  Platform,
  Easing // Import Easing directly from react-native
} from 'react-native';
import { getRandomSlogan } from '../utils/slogans';

const AnimatedSlogan: React.FC = () => {
  const [slogan, setSlogan] = useState<string>('');
  const slideAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

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
    <Animated.Text 
      style={[
        styles.slogan, 
        { 
          transform: [{ translateX: slideAnim }],
          opacity: opacityAnim,
        }
      ]}
    >
      {slogan}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  slogan: {
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 22,
    marginBottom: 32,
    color: '#000000',
  },
});

export default AnimatedSlogan;