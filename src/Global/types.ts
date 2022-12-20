import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

//padrão de artigo à ser recebido na requisição da API
export interface ArticleProps {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: {
        id: string ,
        name: string ,
    },
    title: string ,
    url: string,
    urlToImage: string 
}

export interface ArticleToRenderProps {
    articles: ArticleProps[],
    navigationParam: NativeStackNavigationProp<StackParams>
}

//interface para navegação entre tabs (por categoria)
export type TabParams = {
    homeScreen: String;
    bussinessScreen: String;
    sportsScreen: String;
    searchScreen: String;
}

//interface para navegação entre telas de categoria e artigos 
export type StackParams = {
    home: String;
    business: String;
    sports: String;
    search: String;
    article: { article: ArticleProps }
}

//padrão dos parâmetros recebidos no componente Article 
export interface CategoryProps {
    typeOfArticles: "homeTopArticles" | "homeBottomArticles" | "business" | "sports" | "search",
    searchKey: String,
    navigationParam: NativeStackNavigationProp<StackParams>
}

export type StackProps = NativeStackScreenProps<StackParams>
export type StackArticleProps = NativeStackScreenProps<StackParams, 'article'>