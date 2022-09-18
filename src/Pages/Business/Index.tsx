import React from 'react';
import { ScrollView } from 'react-native';
import { ArticlesByCategory } from '../../Content/ArticlesByCategory/Index';

export function Business() {
    return (
        <ScrollView>
            <ArticlesByCategory category="business" />
        </ScrollView>
    )
}