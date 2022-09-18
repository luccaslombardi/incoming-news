import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './Styles';

interface CategoryProps {
    category: String
}

export function ArticlesByCategory(props: CategoryProps) {
    const [articlesByCategory, setArticlesByCategory] = useState([])
    const apiKey = '2fda4986c3b244838f906de2c3dd9fcb'



    useEffect(() => {

        const getArticlesByCategory = () => {
            axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&pageSize=10&apiKey=${apiKey}`)
                .then(response => {
                    setArticlesByCategory(response.data.articles);
                    console.log("Tudo ok")
                })
                .catch(err => { console.log(err); });
        }

        getArticlesByCategory()
    }, [props.category])

    return (
        <View>


            <View style={styles.articleContainer}>

                {articlesByCategory.map(article => {
                    const { title, description, urlToImage } = article
                    return (

                        <View style={styles.article} key={title}>

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

                        </View>
                    )

                })
                }
            </View>
        </View>
    )
}