import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StorageScreen() {
  const [input, setInput] = useState('');
  const [storedValue, setStoredValue] = useState('');

  const saveData = async () => {
    await AsyncStorage.setItem('meuDado', input);
    setInput('');
    loadData();
  };

  const loadData = async () => {
    const value = await AsyncStorage.getItem('meuDado');
    if (value) setStoredValue(value);
  };

  useEffect(() => { loadData(); }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Persistência de Dados</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Salvar" onPress={saveData} />
      <Text>Valor Salvo: {storedValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10 }
});