// components/SocialButtons.tsx - Updated version of your existing component
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useResponsive } from '../hooks/useResponsive';
import { colors } from '../styles/colors';

interface SocialButtonsProps {
  onSocialAuth?: (provider?: string) => void;
}

export default function SocialButtons({ onSocialAuth }: SocialButtonsProps) {
  const { spacing } = useResponsive();
  
  // Show Apple Sign-In only on iOS (App Store requirement)
  const showAppleSignIn = Platform.OS === 'ios';
  
  return (
    <View style={[styles.socialContainer, { gap: spacing }]}>
      {showAppleSignIn && (
        <TouchableOpacity 
          style={styles.appleButton}
          onPress={() => onSocialAuth?.('apple')}
        >
          <AntDesign name="apple1" size={20} color="white" />
          <Text style={styles.socialButtonTextWhite}>Continue with Apple</Text>
        </TouchableOpacity>
      )}
      
      <TouchableOpacity 
        style={styles.googleButton}
        onPress={() => onSocialAuth?.('google')}
      >
        <AntDesign name="google" size={20} color={colors.social.google} />
        <Text style={styles.socialButtonTextDark}>Continue with Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.facebookButton}
        onPress={() => onSocialAuth?.('facebook')}
      >
        <AntDesign name="facebook-square" size={20} color="white" />
        <Text style={styles.socialButtonTextWhite}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  socialContainer: {
    marginBottom: 12,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.social.apple,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.social.facebook,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  socialButtonTextDark: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.dark,
  },
  socialButtonTextWhite: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
});