import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Styles';

export function BottomArticles() {
    const [bottomArticles, setBottomArticles] = useState([])
    const apiKey = '2fda4986c3b244838f906de2c3dd9fcb'

    useEffect(() => {

        const getBottomArticles = () => {
            axios.get(`https://newsapi.org/v2/top-headlines?country=br&pageSize=10&apiKey=${apiKey}`)
                .then(response => {
                    setBottomArticles(response.data.articles);
                })
                .catch(err => { console.log(err); });
        }

        getBottomArticles()
    }, [])

    return (
        <View>
            <Text style={styles.bottomArticlesHeader}>For You</Text>

            <View style={styles.bottomArticleContainer}>

                {bottomArticles.map(article => {
                    const { title, description, urlToImage } = article
                    return (

                        <View style={styles.bottomArticle} key={title}>
                            <View style={styles.bottomArticleImageContent}>
                                <Image style={styles.bottomArticleImage} source={{ uri: urlToImage }} />
                            </View>

                            <View style={styles.bottomContentArticle}>
                                <Text style={styles.bottomArticleTitle} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
                                <Text style={styles.bottomArticleDescription} numberOfLines={2} ellipsizeMode="tail">{description}</Text>
                            </View>

                        </View>
                    )

                })
                }
            </View>
        </View>
    )
}