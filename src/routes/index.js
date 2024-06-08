import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import {loadData} from '../utils/EncryptedStorageUtil';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [initialRoute, setInitialRoute] = useState('LoginScreen');

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userData = await loadData('user');
        if (userData) {
          setInitialRoute('HomeScreen'); // Set initial route to Home if user data is found
        } else {
          setInitialRoute('LoginScreen'); // Set initial route to Login if no user data
        }
      } catch (error) {
        console.error('Failed to load user data:', error);
        setInitialRoute('LoginScreen'); // Fail-safe to Login on error
      }
    }

    fetchUserData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
