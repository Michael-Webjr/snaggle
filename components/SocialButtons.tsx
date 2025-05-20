// components/SocialButtons.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useResponsive } from '../hooks/useResponsive';
import { colors } from '../styles/colors';

const SocialButtons: React.FC = () => {
  const { spacing } = useResponsive();
  
  return (
    <View style={[styles.socialContainer, { gap: spacing }]}>
      <TouchableOpacity style={styles.googleButton}>
        <AntDesign name="google" size={20} color={colors.social.google} />
        <Text style={styles.socialButtonTextDark}>Continue with Google</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.appleButton}>
        <AntDesign name="apple1" size={20} color="white" />
        <Text style={styles.socialButtonTextWhite}>Continue with Apple</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.facebookButton}>
        <AntDesign name="facebook-square" size={20} color="white" />
        <Text style={styles.socialButtonTextWhite}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 10,
  },
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.social.apple,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 10,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.social.facebook,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 10,
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

export default SocialButtons;