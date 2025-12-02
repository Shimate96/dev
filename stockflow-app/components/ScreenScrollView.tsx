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
