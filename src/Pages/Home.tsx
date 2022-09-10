import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageStore } from 'react-native';

export function Home() {
    const [articles, setArticles] = useState([])
    const [idArticle, setIdArticle] = useState(0)
    const [term, setTerm] = useState('everything')
    const apiKey = '2fda4986c3b244838f906de2c3dd9fcb'

    useEffect((() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch(`https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}`)
                const data = await res.json()
                setArticles(data.articles)
                console.log('Running')

            } catch (error) {
                console.log(error)
            }
        }
        fetchArticles()
    }), [])
    return (
        <ScrollView>
            <View style={styles.container}>

                {articles.map(article => {
                    const { title, description, urlToImage } = article


                    return (

                        <View style={styles.article} key={title}>
                            <Image style={styles.image} source={{ uri: urlToImage }} />
                            <View style={styles.contentArticle}>
                                <Text style={styles.title}>{title}</Text>
                                <Text>{description}</Text>
                            </View>

                        </View>
                    )

                })}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    article: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#f8f8f8',
        borderRadius: 10,
        height: 400,
        width: 350,
        marginVertical: 10,
    },
    contentArticle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 349,
        height: 200,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
});