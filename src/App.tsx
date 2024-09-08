import {StatusBar, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BottomTabNavigation from './navigation/BottomTabNavigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <BottomTabNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
