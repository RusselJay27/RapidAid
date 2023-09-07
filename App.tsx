import 'react-native-gesture-handler';
import React from 'react';

import Router from './src';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
  },
});

export default App;