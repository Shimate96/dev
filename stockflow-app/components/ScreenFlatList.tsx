import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, FlatListProps } from 'react-native';

export function ScreenFlatList<ItemT = any>(props: FlatListProps<ItemT>) {
  const { contentContainerStyle, ...rest } = props;
  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        {...rest}
        contentContainerStyle={[styles.content, contentContainerStyle]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: 'transparent' },
  content: { padding: 16 },
});

export default ScreenFlatList;
