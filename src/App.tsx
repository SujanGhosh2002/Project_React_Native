import {StatusBar, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import {Colors} from 'react-native/Libraries/NewAppScreen';
<<<<<<< HEAD
import StackNavigation from './navigation/StackNavigation';
=======
import BottomTabNavigation from './navigation/BottomTabNavigation';
>>>>>>> 3d26925bf784a0775e0de4df1bbd8ba75036963a

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
<<<<<<< HEAD
      <StackNavigation />
=======
      <BottomTabNavigation />
>>>>>>> 3d26925bf784a0775e0de4df1bbd8ba75036963a
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
