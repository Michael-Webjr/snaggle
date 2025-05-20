// components/Header.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="storefront" size={28} color="white" />
      </View>
      <Text style={styles.appName}>Snaggle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  iconContainer: {
    backgroundColor: colors.purple.dark,
    borderRadius: 20,
    padding: 12,
    shadowColor: colors.purple.dark,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  appName: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text.primary,
    letterSpacing: -0.5,
  },
});

export default Header;