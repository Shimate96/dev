import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export const AdjustStockScreen: React.FC<any> = ({ route, navigation }) => {
  const { item } = route.params || {};
  const [newQuantity, setNewQuantity] = useState(item?.quantity?.toString() || '');
  const [reason, setReason] = useState('');

  const handleAdjust = () => {
    // TODO: Implement adjustment logic
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adjust Stock - {item?.name}</Text>
      <Text style={styles.label}>Current: {item?.quantity}</Text>
      <TextInput style={styles.input} placeholder="New Quantity" keyboardType="numeric" value={newQuantity} onChangeText={setNewQuantity} />
      <TextInput style={styles.input} placeholder="Reason" value={reason} onChangeText={setReason} multiline />
      <TouchableOpacity style={styles.button} onPress={handleAdjust}>
        <Text style={styles.buttonText}>Adjust</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 15 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 12, marginBottom: 15, borderRadius: 8 },
  button: { backgroundColor: '#E63946', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
