import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { ArticleProps, CategoryProps } from '../../Global/types';
import { GetArticleByCategory } from '../../Hooks/GetArticleByCategory';
import { TopArticles } from './TopArticles/Index';
import { StandardArticles } from './StandardArticles/Index';

export function Articles(props: CategoryProps) {
    const [articles, setArticles] = useState<ArticleProps[]>([])
    GetArticleByCategory(props.typeOfArticles, props.searchKey, setArticles)

    return (
        <View>
            <ScrollView>
                {props.typeOfArticles === "homeTopArticles" ? (
                    <TopArticles articles={articles} navigationParam={props.navigationParam} />
                ) : (
                    <StandardArticles articles={articles} navigationParam={props.navigationParam} />
                )}
            </ScrollView>
        </View>
    )
}