// components/AnimatedSlogan.tsx
import React, { useRef, useState, useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { getRandomSlogan } from '../utils/slogans';

const AnimatedSlogan: React.FC = () => {
  const [slogan, setSlogan] = useState<string>('');
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Set initial slogan
    const initialSlogan = getRandomSlogan();
    setSlogan(initialSlogan);

    // Setup interval for slogan rotation with slide animation
    const sloganInterval = setInterval(() => {
      // Slide out to right
      Animated.timing(slideAnim, {
        toValue: 100,
        duration: 1250,
        useNativeDriver: true,
      }).start(() => {
        // Change slogan and reset position to left
        const newSlogan = getRandomSlogan();
        setSlogan(newSlogan);
        slideAnim.setValue(-100);
        // Slide in from left
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 1250,
          useNativeDriver: true,
        }).start();
      });
    }, 7500);

    return () => {
      clearInterval(sloganInterval);
    };
  }, [slideAnim]);

  if (!slogan) return null;

  return (
    <Animated.Text 
      style={[
        styles.slogan, 
        { 
          transform: [{ translateX: slideAnim }],
          overflow: 'hidden'
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