// screens/LoginScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// Import shared utilities and styles
import { colors } from '../styles/colors';
import { useResponsive } from '../hooks/useResponsive';

// Import Components
import Header from '../components/Header';
import AnimatedTitle from '../components/AnimatedTitle';
import AnimatedSlogan from '../components/AnimatedSlogan';
import SocialButtons from '../components/SocialButtons';
import SignIn from '../components/SignIn';
import SmoothButton from '../components/SmoothButton';
import { animateLayout } from '../components/AnimatedLayout';

export default function LoginScreen() {
  const navigation = useNavigation();
  
  useEffect(() => {
    animateLayout('transitionIn');
  }, []);

  const handleAuth = () => {
    // Type assertion to handle navigation
    (navigation as any).navigate('Main');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.gradient.dark, colors.gradient.medium, colors.gradient.light]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.backgroundGradient}
      />
      
      <SafeAreaView style={styles.safeArea}>
        <Header />

        <View style={styles.content}>
          <AnimatedTitle />
          <AnimatedSlogan />
          <SocialButtons onSocialAuth={handleAuth} />
          
          <SmoothButton 
            title="Create account" 
            onPress={handleAuth} 
            style={styles.createAccountButton}
            textStyle={styles.createAccountButtonText}
            backgroundColor={colors.purple.dark}
          />
          
          <Text style={styles.termsText}>
            By signing up, you agree to the{' '}
            <Text style={styles.linkText}>Terms of Service</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>, including{' '}
            <Text style={styles.linkText}>Cookie Use</Text>.
          </Text>

          <SignIn onSignIn={handleAuth} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  backgroundGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: Platform.OS === 'ios' ? 16 : 8,
  },
  createAccountButton: {
    borderRadius: 50,
    marginBottom: 8,
  },
  createAccountButtonText: {
    color: colors.text.primary,
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  termsText: {
    fontSize: 11,
    color: colors.text.tertiary,
    lineHeight: 16,
    marginBottom: 16,
  },
  linkText: {
    color: colors.purple.dark,
    fontWeight: '600',
  },
});