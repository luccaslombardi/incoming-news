import { Home } from './src/Pages/Home/Home';
import { View } from 'react-native';
import styles from './Global-Styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

