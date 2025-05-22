// components/AnimatedTitle.tsx - With responsive text layout
import React, { useRef, useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Animated, 
  StyleSheet, 
  Platform,
  Easing,
} from 'react-native';
import { rotatingWords } from '../constants/rotatingWords';
import { useResponsive } from '../hooks/useResponsive';
import { colors } from '../styles/colors';

const AnimatedTitle: React.FC = () => {
  const { screenWidth } = useResponsive();
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const wordFadeAnim = useRef(new Animated.Value(1)).current;
  
  // Calculate font size based on screen width
  const fontSize = Math.min(30, screenWidth * 0.075);
  const lineHeight = fontSize * 1.2; // Maintain proper line height ratio

  useEffect(() => {
    const wordInterval = setInterval(() => {
      Animated.timing(wordFadeAnim, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
        easing: Platform.OS === 'ios' ? 
          Easing.cubic : 
          Easing.out(Easing.quad),
      }).start(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        
        Animated.timing(wordFadeAnim, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
          easing: Platform.OS === 'ios' ? 
            Easing.cubic : 
            Easing.in(Easing.quad),
        }).start();
      });
    }, 3000);

    return () => {
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <View style={styles.titleContainer}>
      {/* First line */}
      <Text style={[styles.mainTitle, { fontSize, lineHeight }]}>
        Endless ways to
      </Text>
      
      {/* Second line */}
      <Text style={[styles.mainTitle, { fontSize, lineHeight }]}>
        simplify your
      </Text>
      
      {/* Third line - always starts with the rotating word */}
      <View style={styles.rotatingLine}>
        <Animated.Text 
          style={[
            styles.rotatingWord, 
            { 
              opacity: wordFadeAnim,
              fontSize,
              lineHeight
            }
          ]}
        >
          {rotatingWords[currentWordIndex]}
        </Animated.Text>
        <Text style={[styles.mainTitle, { fontSize, lineHeight }]}>
          {' '}life.
        </Text>
      </View>
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
    letterSpacing: -0.5,
  },
  rotatingWord: {
    fontWeight: '800',
    color: '#000000', // Black
    letterSpacing: -0.5,
  },
  rotatingLine: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap', // Prevent wrapping
  },
});

export default AnimatedTitle;