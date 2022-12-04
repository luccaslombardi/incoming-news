import { ScrollView, View } from 'react-native';
import { Articles } from '../../Components/Articles/Index';
import { StackProps } from '../../Routes';
import styles from './Styles';

export function Sports({ navigation }: StackProps) {
    return (
        <View>
            <ScrollView style={styles.container}>
                <Articles typeOfArticles="sports" searchKey="" navigationParam={navigation} />
            </ScrollView>
        </View>
    )
}