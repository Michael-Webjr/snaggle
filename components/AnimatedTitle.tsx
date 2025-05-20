// components/AnimatedTitle.tsx
import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { useResponsive } from '../hooks/useResponsive';
import { rotatingWords } from '../constants/rotatingWords';
import { colors } from '../styles/colors';

const AnimatedTitle: React.FC = () => {
  const { screenWidth } = useResponsive();
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const wordFadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Setup interval for word rotation
    const wordInterval = setInterval(() => {
      // Fade out
      Animated.timing(wordFadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        // Change word
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        // Fade in
        Animated.timing(wordFadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 3000);

    return () => {
      clearInterval(wordInterval);
    };
  }, [wordFadeAnim]);

  return (
    <View style={styles.titleContainer}>
      <Text style={[styles.mainTitle, { fontSize: Math.min(34, screenWidth * 0.082) }]}>
        Endless ways to simplify your{' '}
        <Animated.Text 
          style={[
            styles.rotatingWord, 
            { 
              opacity: wordFadeAnim,
              fontSize: Math.min(34, screenWidth * 0.082)
            }
          ]}
        >
          {rotatingWords[currentWordIndex]}
        </Animated.Text>
        {' '}life.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 12,
  },
  mainTitle: {
    fontWeight: '800',
    color: colors.text.primary,
    lineHeight: 42,
    letterSpacing: -0.5,
  },
  rotatingWord: {
    fontWeight: '800',
    color: '#000000', // Black
    lineHeight: 42,
    letterSpacing: -0.5,
  },
});

export default AnimatedTitle;