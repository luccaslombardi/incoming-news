import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from './Styles';


export function Home() {
    const [topArticles, setTopArticles] = useState([])
    const [bottomArticles, setBottomArticles] = useState([])
    const apiKey = '2fda4986c3b244838f906de2c3dd9fcb'


    useEffect(() => {
        const getTopArticles = () => {
            axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=5&apiKey=${apiKey}`)
                .then(response => {
                    setTopArticles(response.data.articles);
                })
                .catch(err => { console.log(err); });
        }
        const getBottomArticles = () => {
            axios.get(`https://newsapi.org/v2/top-headlines?country=br&pageSize=10&apiKey=${apiKey}`)
                .then(response => {
                    setBottomArticles(response.data.articles);
                })
                .catch(err => { console.log(err); });
        }
        getTopArticles()
        getBottomArticles()
    }, [])


    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.logo}>LOGO AQUI</Text>
                </View>


                <Text style={styles.TopArticlesHeader}>Top News</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {topArticles.map(article => {
                        const { title, description, urlToImage } = article
                        return (

                            <View style={styles.topArticle} key={title}>
                                <Image style={styles.topArticleImage} source={{ uri: urlToImage }} />
                                <View style={styles.topContentArticle}>
                                    <Text style={styles.topArticleTitle} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
                                    <Text numberOfLines={3} ellipsizeMode="tail">{description}</Text>
                                </View>

                            </View>
                        )

                    })
                    }
                </ScrollView>

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
        </ScrollView>
    )
}

