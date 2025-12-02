import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HeaderTitle: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
});
