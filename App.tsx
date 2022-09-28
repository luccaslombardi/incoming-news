
import styles from './Global-Styles';
import { TabRoutes } from './src/Routes/Index'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}

