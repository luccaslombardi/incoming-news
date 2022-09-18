import { Text, View, ScrollView, Image } from 'react-native';
import { TopArticles } from '../../Content/TopArticles/Index';
import { BottomArticles } from '../../Content/BottomArticles/Index';
import styles from './Styles';


export function Home() {
    return (
        <ScrollView>
            <View style={styles.container}>

                <TopArticles />
                <BottomArticles />

            </View>
        </ScrollView>
    )
}

