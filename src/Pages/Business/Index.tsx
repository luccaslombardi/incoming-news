import React from 'react';
import { ScrollView } from 'react-native';
import { ArticlesByCategory } from '../../Contents/ArticlesByCategory/Index';

export function Business({ navigation }: any) {
    return (
        <ScrollView>
            <ArticlesByCategory category="business" navigationParam={navigation} />
        </ScrollView>
    )
}