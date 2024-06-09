import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import QrCodeScannerScreen from '../screens/QrCodeSannerScreen';
import {loadData} from '../utils/EncryptedStorageUtil';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userData = await loadData('user');
        setIsAuthenticated(!!userData);
      } catch (error) {
        console.error('Failed to load user data:', error);
        setIsAuthenticated(false);
      }
    }

    fetchUserData();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated === null ? (
        // Display nothing or a loading screen while checking authentication status
        <></>
      ) : isAuthenticated ? (
        // Authenticated stack
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="QrCodeScannerScreen"
            component={QrCodeScannerScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        // Unauthenticated stack
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="QrCodeScannerScreen"
            component={QrCodeScannerScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
