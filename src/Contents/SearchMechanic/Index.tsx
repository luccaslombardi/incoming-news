import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles';

interface SearchProps {
    searchKey: String,
    navigationParam: any
}

export function SearchMechanic(props: SearchProps) {
    const [articlesBySearch, setArticlesBySearch] = useState([])
    const apiKey = '2fda4986c3b244838f906de2c3dd9fcb'



    useEffect(() => {

        const getArticlesBySearch = () => {
            axios.get(`https://newsapi.org/v2/everything?q=${props.searchKey}&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`)
                .then(response => {
                    setArticlesBySearch(response.data.articles);
                    console.log("Tudo ok")
                })
                .catch(err => { console.log(err); });
        }

        getArticlesBySearch()
    }, [props.searchKey])

    return (
        <View>


            <View style={styles.articleContainer}>

                {!props.searchKey ? (
                    <Text>Busque</Text>
                ) : (
                    <ScrollView>
                        {articlesBySearch.map(article => {
                            const { title, description, urlToImage } = article
                            return (

                                <TouchableOpacity style={styles.article} key={title} onPress={() => props.navigationParam.navigate('article', article)} >

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

                                </TouchableOpacity >
                            )

                        })
                        }
                    </ScrollView>
                )}




            </View>
        </View>
    )
}