import React from 'react';
import { View, ViewStyle } from 'react-native';

interface ThemedViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  lightColor?: string;
  darkColor?: string;
}

export const ThemedView: React.FC<ThemedViewProps> = ({
  children,
  style,
  lightColor = '#fff',
  darkColor = '#1a1a1a',
}) => {
  return (
    <View style={[{ backgroundColor: lightColor }, style]}>
      {children}
    </View>
  );
};
