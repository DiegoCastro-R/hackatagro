import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular as NunitoRegular
} from '@expo-google-fonts/nunito';
import MainNavigator from './navigation/mainNavigator';

const App = () => {
  let [fontsLoaded] = useFonts({
    NunitoRegular
  });

  if (!fontsLoaded) return <AppLoading />

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },
});

export default App;
