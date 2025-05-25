// components/SignIn.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useResponsive } from '../hooks/useResponsive';
import { colors } from '../styles/colors';
import SmoothButton from './SmoothButton';

interface SignInProps {
  onSignIn: () => void;
}

export default function SignIn({ onSignIn }: SignInProps) {
  const { spacing } = useResponsive();
  
  return (
    <View style={[styles.signInSection, { marginBottom: spacing }]}>
      <Text style={styles.signInPrompt}>Have an account already?</Text>
      
      <SmoothButton 
        title="Sign in" 
        onPress={onSignIn}
        style={styles.signInButton}
        textStyle={styles.signInButtonText}
        backgroundColor={colors.purple.dark}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  signInSection: {
    marginBottom: 8,
  },
  signInPrompt: {
    fontSize: 15,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 8,
  },
  signInButton: {
    borderRadius: 50,
  },
  signInButtonText: {
    color: colors.text.primary,
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
});