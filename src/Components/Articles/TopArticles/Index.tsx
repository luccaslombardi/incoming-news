import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { ArticleToRenderProps } from "../../../Global/types";
import { convertStringToDate } from "../../../Utils/convertStringToDate";
import styles from './Styles';

export function TopArticles(props: ArticleToRenderProps) {

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {props.articles.map(article => {
                const { title, description, urlToImage, publishedAt } = article
                return (
                    <TouchableOpacity style={styles.topArticle} key={title} onPress={() => props.navigationParam.navigate('article', { article: article })}>
                        {!urlToImage ? (
                            <></>
                        ) : (
                            <Image style={styles.topArticleImage} source={{ uri: urlToImage }} />
                        )}
                        <View style={styles.topContentArticle}>
                            <Text style={styles.topArticleTitle} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
                            <Text style={styles.articleDate} numberOfLines={2} ellipsizeMode="tail">{convertStringToDate(publishedAt)}</Text>
                            <Text numberOfLines={3} ellipsizeMode="tail">{description}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })
            }
        </ScrollView>
    )
}