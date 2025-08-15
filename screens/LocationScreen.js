import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function LocationScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permissão de localização negada');
      return;
    }
    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);
  };

  useEffect(() => { getLocation(); }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Geolocalização</Text>
      {errorMsg ? <Text>{errorMsg}</Text> : location && (
        <Text>Lat: {location.coords.latitude} | Lon: {location.coords.longitude}</Text>
      )}
      <Button title="Atualizar Localização" onPress={getLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }
});