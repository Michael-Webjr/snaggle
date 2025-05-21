// components/SignIn.tsx - Updated with SmoothButton
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useResponsive } from '../hooks/useResponsive';
import { colors } from '../styles/colors';
import SmoothButton from './SmoothButton';

const SignIn: React.FC = () => {
  const { spacing } = useResponsive();
  
  return (
    <View style={[styles.signInSection, { marginBottom: spacing }]}>
      <Text style={styles.signInPrompt}>Have an account already?</Text>
      
      {/* Replace TouchableOpacity with SmoothButton */}
      <SmoothButton 
        title="Sign in" 
        onPress={() => {}} 
        style={styles.signInButton}
        textStyle={styles.signInButtonText}
        backgroundColor={colors.purple.dark}
      />
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
    borderRadius: 50,
  },
  signInButtonText: {
    color: colors.text.primary,
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default SignIn;