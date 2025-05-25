// components/SmoothButton.tsx - Enhanced version with icon support
import React, { useRef } from 'react';
import { 
  Text, 
  StyleSheet, 
  Pressable, 
  ViewStyle, 
  TextStyle,
  Animated,
  View,
} from 'react-native';

interface SmoothButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  backgroundColor?: string;
  activeOpacity?: number;
  children?: React.ReactNode; // For icons
}

const SmoothButton: React.FC<SmoothButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
  backgroundColor = '#4C1D95',
  activeOpacity = 0.8,
  children,
}) => {
  // Create animated values for scale and opacity
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  
  // Animation timing configuration
  const animationConfig = {
    duration: 120,
    useNativeDriver: true,
  };

  // Handle button press in/out animations
  const handlePressIn = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0.97,
        ...animationConfig,
      }),
      Animated.timing(opacityAnim, {
        toValue: activeOpacity,
        ...animationConfig,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        ...animationConfig,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        ...animationConfig,
      }),
    ]).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.container,
        { backgroundColor },
        style,
      ]}
      android_ripple={{ color: 'rgba(255,255,255,0.2)', borderless: false }}
    >
      <Animated.View
        style={[
          styles.buttonContent,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
      >
        {children}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden', // Needed for ripple effect containment
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    position: 'relative',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default SmoothButton;