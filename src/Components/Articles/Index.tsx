import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styles';

interface CategoryProps {
    typeOfArticles: "homeTopArticles" | "homeBottomArticles" | "business" | "sports",
    navigationParam: any
}

export function Articles(props: CategoryProps) {

    const [articles, setArticles] = useState([])
    const apiKey = '2fda4986c3b244838f906de2c3dd9fcb'

    const getTopArticles = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=5&apiKey=${apiKey}`)
            .then(response => {
                setArticles(response.data.articles);
            })
            .catch(err => { console.log(err); });
    }


    const getBottomArticles = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=br&pageSize=10&apiKey=${apiKey}`)
            .then(response => {
                setArticles(response.data.articles);
            })
            .catch(err => { console.log(err); });
    }


    const getArticlesByCategory = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=br&category=${props.typeOfArticles}&pageSize=10&apiKey=${apiKey}`)
            .then(response => {
                setArticles(response.data.articles);
            })
            .catch(err => { console.log(err); });
    }


    useEffect(() => {

        if (props.typeOfArticles === "business" || props.typeOfArticles === "sports") {
            getArticlesByCategory()
        }
        else if (props.typeOfArticles === "homeBottomArticles") {
            getBottomArticles()
        }
        else if (props.typeOfArticles === "homeTopArticles") {
            getTopArticles()
        }


    }, [props.typeOfArticles])

    return (
        <View>

            {props.typeOfArticles === "homeTopArticles" ? (

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {articles.map(article => {
                        const { title, description, urlToImage } = article
                        return (
                            <TouchableOpacity style={styles.topArticle} key={title} onPress={() => props.navigationParam.navigate('article', article)}>
                                {!urlToImage ? (
                                    <></>
                                ) : (
                                    <Image style={styles.topArticleImage} source={{ uri: urlToImage }} />
                                )}
                                <View style={styles.topContentArticle}>
                                    <Text style={styles.topArticleTitle} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
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
                        const { title, description, urlToImage } = article
                        return (

                            <TouchableOpacity style={styles.article} key={title} onPress={() => props.navigationParam.navigate('article', article)}>

                                {!urlToImage ? (
                                    <></>
                                ) : (
                                    <View style={styles.imageContent}>
                                        <Image style={styles.articleImage} source={{ uri: urlToImage }} />
                                    </View>
                                )}



                                <View style={styles.contentArticle}>
                                    <Text style={styles.articleTitle} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
                                    <Text style={styles.articleDescription} numberOfLines={2} ellipsizeMode="tail">{description}</Text>
                                </View>

                            </TouchableOpacity>
                        )

                    })
                    }
                </View>
            )}


        </View>
    )
}