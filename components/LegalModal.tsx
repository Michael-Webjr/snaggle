// components/LegalModal.tsx
import React from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

// TypeScript interface - defines what props this component expects
interface LegalModalProps {
  visible: boolean;        // Is the modal open or closed?
  onClose: () => void;     // Function to call when user wants to close
  title: string;           // "Terms of Service" or "Privacy Policy"
  content: string;         // The actual legal text to display
}

export default function LegalModal({ visible, onClose, title, content }: LegalModalProps) {
  return (
    <Modal
      // animationType: How the modal appears (slide up from bottom)
      animationType="slide"
      // transparent: false = modal takes full screen (what we want)
      transparent={false}
      // visible: Controls if modal is shown (true/false)
      visible={visible}
      // onRequestClose: Android back button handling (required)
      onRequestClose={onClose}
    >
      {/* StatusBar: Make sure status bar looks good in modal */}
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* SafeAreaView: Respect iPhone notch/status bar */}
      <SafeAreaView style={styles.modalContainer}>
        
        {/* Header with title and close button */}
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          
          {/* TouchableOpacity: Makes the X button tappable */}
          <TouchableOpacity 
            onPress={onClose}
            style={styles.closeButton}
            // Increase tap area for better UX (44x44pt minimum for iOS)
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <MaterialIcons name="close" size={24} color={colors.text.dark} />
          </TouchableOpacity>
        </View>
        
        {/* Scrollable content area */}
        <ScrollView 
          style={styles.scrollView}
          // contentContainerStyle: Styles for the scrollable content inside
          contentContainerStyle={styles.scrollContent}
          // Show scroll indicators so user knows there's more content
          showsVerticalScrollIndicator={true}
        >
          <Text style={styles.contentText}>{content}</Text>
        </ScrollView>
        
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    // flexDirection: row = items sit side by side (title | close button)
    flexDirection: 'row',
    // justifyContent: space-between = push items to opposite ends
    justifyContent: 'space-between',
    // alignItems: center = vertically center the row items
    alignItems: 'center',
    // Padding: space inside the header
    paddingHorizontal: 20,
    paddingVertical: 16,
    // Border: subtle line under header
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text.dark,
  },
  closeButton: {
    // Make close button circular and tappable
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1, // Take up remaining space
  },
  scrollContent: {
    // Padding inside the scrollable area
    padding: 20,
    // paddingBottom: extra space at bottom so content isn't cut off
    paddingBottom: 40,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24, // Space between lines for readability
    color: colors.text.dark,
    textAlign: 'left',
  },
});

/* 
LEARNING NOTES:

1. **Modal Component**: React Native's built-in modal - creates overlay over current screen

2. **TypeScript Interface**: Defines exactly what props this component needs
   - Makes code safer and gives you autocomplete

3. **SafeAreaView**: Automatically handles iPhone notch, status bar, home indicator
   - Always use this for full-screen content

4. **flexDirection & justifyContent**: Core layout concepts
   - row = horizontal, column = vertical (default)
   - space-between = push items apart

5. **hitSlop**: Increases tap area without changing visual size
   - Critical for small buttons (iOS requires 44pt minimum)

6. **ScrollView**: Makes content scrollable when it's too long
   - contentContainerStyle affects the content inside, not the scroll container

This pattern (Modal + Header + ScrollView) is used in 90% of professional apps!
*/