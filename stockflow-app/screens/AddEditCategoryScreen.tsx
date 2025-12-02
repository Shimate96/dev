import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export const AddEditCategoryScreen: React.FC<any> = ({ route, navigation }) => {
  const category = route.params?.category;
  const [name, setName] = useState(category?.name || '');
  const [color, setColor] = useState(category?.color || '#E63946');

  const handleSave = () => {
    // TODO: Implement save logic
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category ? 'Edit Category' : 'Add Category'}</Text>
      <TextInput style={styles.input} placeholder="Category Name" value={name} onChangeText={setName} />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 12, marginBottom: 15, borderRadius: 8 },
  button: { backgroundColor: '#E63946', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
