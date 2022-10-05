
import { TabRoutes } from './src/Routes'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Text>Oi</Text>
      <TabRoutes />
    </NavigationContainer>
  );
}

