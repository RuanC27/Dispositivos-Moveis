import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <View><Text>Sem acesso à câmera</Text></View>;

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCameraRef} />
      <Button title="Tirar Foto" onPress={async () => {
        if (cameraRef) {
          let photo = await cameraRef.takePictureAsync();
          console.log(photo);
        }
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 }
});