import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const ScannerScreen: React.FC<any> = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data, type }: { data: string; type: string }) => {
    if (scanned) return;
    setScanned(true);
    // For testing we'll simply alert and navigate back with scanned data
    Alert.alert('Scanned', data, [
      {
        text: 'OK',
        onPress: () => {
          navigation.goBack();
        },
      },
    ]);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text>No access to camera. Please enable camera permissions.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR / Barcode Scanner</Text>
      <View style={styles.scannerContainer}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.scanFrame} pointerEvents="none" />
      </View>
      {scanned && <Text style={styles.hint}>Processing scan...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  scannerContainer: { flex: 1, borderRadius: 12, overflow: 'hidden', backgroundColor: '#000' },
  scanFrame: { position: 'absolute', top: '25%', left: '10%', right: '10%', bottom: '25%', borderWidth: 2, borderColor: '#E63946', borderRadius: 12 },
  hint: { textAlign: 'center', marginTop: 12, color: '#666' },
});

export default ScannerScreen;
