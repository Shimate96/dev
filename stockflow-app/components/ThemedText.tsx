import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography } from '../constants/theme';

interface ThemedTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'bodySmall' | 'caption';
  color?: string;
  children: React.ReactNode;
  style?: any;
}

export const ThemedText: React.FC<ThemedTextProps> = ({
  variant = 'body',
  color = '#000',
  children,
  style,
}) => {
  return (
    <Text style={[Typography[variant], { color }, style]}>
      {children}
    </Text>
  );
};
