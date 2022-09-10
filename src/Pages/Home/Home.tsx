import { Text, View, ScrollView, Image } from 'react-native';
import { TopArticles } from '../../Content/TopArticles/TopArticles';
import { BottomArticles } from '../../Content/BottomArticles/BottomArticles';
import styles from './Styles';


export function Home() {
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.logo}>LOGO AQUI</Text>
                </View>

                <TopArticles />
                <BottomArticles />

            </View>
        </ScrollView>
    )
}

