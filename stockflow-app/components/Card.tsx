import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Shadows } from '../constants/theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  shadow?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({ children, style, shadow = 'md' }) => {
  return (
    <View style={[styles.card, Shadows[shadow], style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
});
