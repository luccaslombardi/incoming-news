import { ScrollView, Text } from 'react-native';
import { ArticlesByCategory } from '../../Content/ArticlesByCategory/Index';

export function Sports() {
    return (
        <ScrollView>
            <ArticlesByCategory category="sports" />
        </ScrollView>
    )
}