import { ScrollView } from 'react-native';
import { Articles } from '../../Components/Articles/Index';
import { StackProps } from '../../Routes';
import styles from './Styles';

export function Home({ navigation }: StackProps) {

    return (
        <ScrollView style={styles.container}>
            <Articles typeOfArticles="homeTopArticles" searchKey="" navigationParam={navigation} />
            <Articles typeOfArticles="homeBottomArticles" searchKey="" navigationParam={navigation} />
        </ScrollView>
    )
}

