import { View, ScrollView, Button } from 'react-native';
import { TopArticles } from '../../Contents/TopArticles/Index';
import { BottomArticles } from '../../Contents/BottomArticles/Index';
import styles from './Styles';


export function Home({ navigation }: any) {

    return (
        <ScrollView>
            <View style={styles.container}>
                <TopArticles navigationParam={navigation} />
                <BottomArticles navigationParam={navigation} />
            </View>
        </ScrollView>
    )
}

