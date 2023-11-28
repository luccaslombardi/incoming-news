import axios from 'axios';

//criação e chamada da url para requests na API
const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

//chamada da api key
const apiKey = process.env.REACT_APP_API_KEY

//request dos primeiros artigos na Home
export const getTopArticles = () => {
    const res = api.get(`/top-headlines?sources=bbc-news&pageSize=5&apiKey=${apiKey}`)
    console.log(apiKey)
    return res
}

//request dos restantes dos artigos na Home
export const getBottomArticles = () => {
    const res = api.get(`/top-headlines?country=br&pageSize=10&apiKey=${apiKey}`)
    return res
}

//request dos artigos de acordo com a categoria
export const getArticlesByCategory = (typeOfArticles: String) => {
    const res = api.get(`/top-headlines?country=br&category=${typeOfArticles}&pageSize=10&apiKey=${apiKey}`)
    console.log(apiKey)
    return res
}

//request dos artigbos de acordo com o texto pesquisado
export const getArticlesBySearch = (searchKey: String) => {
    const res = api.get(`/everything?q=${searchKey}&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`)
    return res
}
