import { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { convertStringToDate } from '../../Utils/convertStringToDate'
import { getTopArticles, getBottomArticles, getArticlesByCategory, getArticlesBySearch } from '../../Service/api'
import { CategoryProps } from '../../Global/types';
import styles from './Styles';


export function Articles(props: CategoryProps) {

    const [articles, setArticles] = useState([])

    //chamadas das funções de request ded acordo com typeOfArticles passado como parâmetro 
    if (props.typeOfArticles === "business" || props.typeOfArticles === "sports") {
        useEffect(() => {
            getArticlesByCategory(props.typeOfArticles).then(response => {
                setArticles(response.data.articles);
            })
                .catch(err => { console.log(err); });
        }, [props.typeOfArticles])
    }

    else if (props.typeOfArticles === "homeBottomArticles") {
        useEffect(() => {
            getBottomArticles().then(response => {
                setArticles(response.data.articles);
            })
                .catch(err => { console.log(err); });
        }, [props.typeOfArticles])
    }

    else if (props.typeOfArticles === "homeTopArticles") {
        useEffect(() => {
            getTopArticles().then(response => {
                setArticles(response.data.articles);
            })
                .catch(err => { console.log(err); });
        }, [props.typeOfArticles])
    }

    else if (props.typeOfArticles === "search") {
        //useEffect será acionado toda vez que tiver alteração na palavra buscada em searchKey
        useEffect(() => {
            getArticlesBySearch(props.searchKey).then(response => {
                setArticles(response.data.articles);
            })
                .catch(err => { console.log(err); });
        }, [props.searchKey])
    }

    return (
        <View>
            <ScrollView>
                {props.typeOfArticles === "homeTopArticles" ? (

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {articles.map(article => {
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

                ) : (
                    <View style={styles.articleContainer}>
                        {articles.map(article => {
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
                )}

            </ScrollView>
        </View>
    )
}