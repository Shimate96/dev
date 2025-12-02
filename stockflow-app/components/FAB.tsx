import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, Text } from 'react-native';

interface FABProps {
  onPress: () => void;
  style?: ViewStyle;
  label?: string;
}

export const FAB: React.FC<FABProps> = ({ onPress, style, label = '+' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.fab, style]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E63946',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 24,
    right: 24,
    elevation: 6,
  },
  text: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
});
