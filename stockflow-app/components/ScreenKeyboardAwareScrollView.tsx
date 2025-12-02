import React from 'react';
import { SafeAreaView, StyleSheet, ViewProps } from 'react-native';
import { KeyboardAwareScrollView, KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';

export const ScreenKeyboardAwareScrollView: React.FC<React.PropsWithChildren<KeyboardAwareScrollViewProps & ViewProps>> = ({ children, contentContainerStyle, style, ...rest }) => {
  return (
    <SafeAreaView style={[styles.safe, style as any]}>
      <KeyboardAwareScrollView contentContainerStyle={[styles.content, contentContainerStyle]} {...rest}>
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: 'transparent' },
  content: { padding: 16 },
});

export default ScreenKeyboardAwareScrollView;
