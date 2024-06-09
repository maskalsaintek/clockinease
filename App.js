import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/routes';
import {HudProvider} from 'react-native-hud-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <HudProvider IconComponent={MaterialCommunityIcons}>
      <Navigation />
    </HudProvider>
  );
}
