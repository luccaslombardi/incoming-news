import { ScrollView, View } from 'react-native';
import { Articles } from '../../Components/Articles/Index';
import styles from './Styles';

export function Sports({ navigation }: any) {
    return (
        <View>
            <ScrollView style={styles.container}>
                <Articles typeOfArticles="sports" searchKey="" navigationParam={navigation} />
            </ScrollView>
        </View>
    )
}