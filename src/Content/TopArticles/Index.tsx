import axios from 'axios';
import { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from './Styles';

export function TopArticles() {
    const [topArticles, setTopArticles] = useState([])
    const apiKey = '2fda4986c3b244838f906de2c3dd9fcb'

    useEffect(() => {
        const getTopArticles = () => {
            axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=5&apiKey=${apiKey}`)
                .then(response => {
                    setTopArticles(response.data.articles);
                })
                .catch(err => { console.log(err); });
        }

        getTopArticles()
    }, [])
    return (
        <View>
            <Text style={styles.TopArticlesHeader}>Top News</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {topArticles.map(article => {
                    const { title, description, urlToImage } = article
                    return (

                        <View style={styles.topArticle} key={title}>
                            {!urlToImage ? (
                                <></>
                            ) : (
                                <Image style={styles.topArticleImage} source={{ uri: urlToImage }} />
                            )}

                            <View style={styles.topContentArticle}>
                                <Text style={styles.topArticleTitle} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
                                <Text numberOfLines={3} ellipsizeMode="tail">{description}</Text>
                            </View>

                        </View>
                    )
                })
                }
            </ScrollView>
        </View>
    )
}