import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ScannerScreen: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR/Barcode Scanner</Text>
      <View style={styles.scannerArea}>
        <Text>Camera Scanner Placeholder</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  scannerArea: { width: 300, height: 300, borderWidth: 2, borderColor: '#E63946', justifyContent: 'center', alignItems: 'center', borderRadius: 12 },
});
