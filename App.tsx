import { Home } from './src/Pages/Home';
import { View } from 'react-native';
import styles from './Global-Styles';
import { Routes } from './src/Routes/Index'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (

    <NavigationContainer>
      <Routes />
    </NavigationContainer>

  );
}

