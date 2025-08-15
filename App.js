import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';
import LocationScreen from './screens/LocationScreen';
import ApiScreen from './screens/ApiScreen';
import StorageScreen from './screens/StorageScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Localização" component={LocationScreen} />
      <Tab.Screen name="API" component={ApiScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Principal" component={TabNavigator} />
        <Drawer.Screen name="Câmera" component={CameraScreen} />
        <Drawer.Screen name="Armazenamento" component={StorageScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}