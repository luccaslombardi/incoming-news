import { Text, TouchableOpacity, View, Image } from "react-native";
import { ArticleToRenderProps } from "../../../Global/types";
import { convertStringToDate } from "../../../Utils/convertStringToDate";
import styles from './Styles';

export function StandardArticles(props: ArticleToRenderProps) {

    return (
        <View style={styles.articleContainer}>
            {props.articles.map(article => {
                const { title, description, urlToImage, publishedAt } = article
                return (

                    <TouchableOpacity style={styles.article} key={title} onPress={() => props.navigationParam.navigate('article', { article: article })}>
                        {!urlToImage ? (
                            <></>
                        ) : (
                            <View style={styles.imageContent}>
                                <Image style={styles.articleImage} source={{ uri: urlToImage }} />
                            </View>
                        )}
                        <View style={styles.contentArticle}>
                            <Text style={styles.articleTitle} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
                            <Text style={styles.articleDate} numberOfLines={2} ellipsizeMode="tail">{convertStringToDate(publishedAt)}</Text>
                            <Text style={styles.articleDescription} numberOfLines={2} ellipsizeMode="tail">{description}</Text>
                        </View>

                    </TouchableOpacity>
                )

            })
            }
        </View>
    )
}