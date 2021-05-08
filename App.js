import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Platform, 
  Button, 
  Alert,
  Dimensions
} from 'react-native';

import {useDimentions, useDeviceOrientation} from '@react-native-community/hooks';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen"
import HomeScreen from './screens/HomeScreen';


const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color : 'white' },
  headerTintColor: "white",
}

export default function App() {
  const {landscape} = useDeviceOrientation();

  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>       
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
