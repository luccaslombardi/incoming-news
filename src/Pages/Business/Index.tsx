import { ScrollView } from 'react-native';
import { Articles } from '../../Components/Articles/Index';
import { StackProps } from '../../Global/types';
import styles from './Styles';


export function Business({ navigation }: StackProps) {
    return (
        <ScrollView style={styles.container}>
            <Articles typeOfArticles="business" searchKey="" navigationParam={navigation} />
        </ScrollView>
    )
}