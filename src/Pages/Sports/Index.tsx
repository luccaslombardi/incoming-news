import { ScrollView } from 'react-native';
import { ArticlesByCategory } from '../../Contents/ArticlesByCategory/Index';

export function Sports({ navigation }: any) {
    return (
        <ScrollView>
            <ArticlesByCategory category="sports" navigationParam={navigation} />
        </ScrollView>
    )
}