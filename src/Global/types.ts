import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

//interface para navegação entre tabs (por categoria)
export type TabParams = {
    homeScreen: String;
    bussinessScreen: String;
    sportsScreen: String;
    searchScreen: String;
}

//interface para definir arquitetura do artigo no parâmetro da navegação entre telas
interface RenderArticleProps {
    title: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

//interface para navegação entre telas de categoria e artigos 
export type StackParams = {
    home: String;
    business: String;
    sports: String;
    search: String;
    article: { article: RenderArticleProps }
}

//padrão dos parâmetros recebidos no componente Article 
export interface CategoryProps {
    typeOfArticles: "homeTopArticles" | "homeBottomArticles" | "business" | "sports" | "search",
    searchKey: String,
    navigationParam: NativeStackNavigationProp<StackParams>
}

export type StackProps = NativeStackScreenProps<StackParams>
export type StackArticleProps = NativeStackScreenProps<StackParams, 'article'>