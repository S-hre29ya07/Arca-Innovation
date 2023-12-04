// navigation/AppNavigator.js
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import AddEmployeeScreen from '../screens/AddEmployeeScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    AddEmployee: AddEmployeeScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;
