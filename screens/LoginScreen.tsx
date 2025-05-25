// screens/LoginScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Import shared utilities and styles
import { colors } from '../styles/colors';

// Import Components
import Header from '../components/Header';
import AnimatedTitle from '../components/AnimatedTitle';
import AnimatedSlogan from '../components/AnimatedSlogan';
import SocialButtons from '../components/SocialButtons';
import LegalModal from '../components/LegalModal';
import { animateLayout } from '../components/AnimatedLayout';

// Import types
import type { RootStackScreenProps } from '../navigation/types';
import { TERMS_OF_SERVICE, PRIVACY_POLICY } from '../constants/legalContent';

type Props = RootStackScreenProps<'Login'>;

export default function LoginScreen({ navigation }: Props) {
  
  // STATE: Track which modals are open
  // useState returns [currentValue, functionToChangeValue]
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  
  useEffect(() => {
    animateLayout('transitionIn');
  }, []);

  const handleAuth = (provider?: string) => {
    // TODO: Implement actual OAuth authentication
    console.log(`Authenticating with ${provider || 'social provider'}`);
    
    // For now, navigate directly to main app
    // In production, this will be called after successful OAuth
    navigation.navigate('Main');
  };

  // MODAL FUNCTIONS: Open and close modals
  const openTermsModal = () => {
    console.log('Opening Terms modal'); // Debug log
    setShowTermsModal(true); // Change state from false to true
  };

  const closeTermsModal = () => {
    console.log('Closing Terms modal'); // Debug log
    setShowTermsModal(false); // Change state from true to false
  };

  const openPrivacyModal = () => {
    console.log('Opening Privacy modal');
    setShowPrivacyModal(true);
  };

  const closePrivacyModal = () => {
    console.log('Closing Privacy modal');
    setShowPrivacyModal(false);
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
          <View style={styles.titleSection}>
            <AnimatedTitle />
            <AnimatedSlogan />
          </View>
          
          <View style={styles.authSection}>
            <Text style={styles.welcomeText}>
              Join thousands of roommates sharing smarter
            </Text>
            
            <SocialButtons onSocialAuth={handleAuth} />
            
            <Text style={styles.termsText}>
              By continuing, you agree to our{' '}
              <Text 
                style={styles.linkText}
                onPress={openTermsModal}
              >
                Terms of Service
              </Text> and{' '}
              <Text 
                style={styles.linkText}
                onPress={openPrivacyModal}
              >
                Privacy Policy
              </Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>

      {/* MODALS: These sit on top of everything else */}
      <LegalModal
        visible={showTermsModal}
        onClose={closeTermsModal}
        title="Terms of Service"
        content={TERMS_OF_SERVICE}
      />

      <LegalModal
        visible={showPrivacyModal}
        onClose={closePrivacyModal}
        title="Privacy Policy"
        content={PRIVACY_POLICY}
      />
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
    paddingBottom: Platform.OS === 'ios' ? 24 : 16,
  },
  titleSection: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
  },
  authSection: {
    paddingBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  termsText: {
    fontSize: 12,
    color: colors.text.tertiary,
    lineHeight: 18,
    textAlign: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
  },
  linkText: {
    color: colors.purple.dark,
    fontWeight: '600',
  },
});