import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, ViewProps } from 'react-native';

export const ScreenScrollView: React.FC<React.PropsWithChildren<ViewProps>> = ({ children, style, ...rest }) => {
  return (
    <SafeAreaView style={[styles.safe, style as any]}>
      <ScrollView contentContainerStyle={styles.content} {...rest}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: 'transparent' },
  content: { padding: 16 },
});

export default ScreenScrollView;
import React from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';

interface ScreenScrollViewProps {
  children: React.ReactNode;
  style?: any;
}

export const ScreenScrollView: React.FC<ScreenScrollViewProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={style}>{children}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
