// components/SignIn.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useResponsive } from '../hooks/useResponsive';
import { colors } from '../styles/colors';

const SignIn: React.FC = () => {
  const { spacing } = useResponsive();
  
  return (
    <View style={[styles.signInSection, { marginBottom: spacing }]}>
      <Text style={styles.signInPrompt}>Have an account already?</Text>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    backgroundColor: colors.purple.dark,
    borderRadius: 50,
    paddingVertical: 12,
  },
  signInButtonText: {
    color: colors.text.primary,
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default SignIn;