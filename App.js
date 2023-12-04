// App.js
import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './navigation/AppNavigator';
import 'react-native-gesture-handler';
const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
