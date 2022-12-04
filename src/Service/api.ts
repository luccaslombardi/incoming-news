import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})
const apiKey = process.env.REACT_APP_API_KEY

export const getTopArticles = () => {
    const res = api.get(`/top-headlines?sources=bbc-news&pageSize=5&apiKey=${apiKey}`)
    return res
}

export const getBottomArticles = () => {
    const res = api.get(`/top-headlines?country=br&pageSize=10&apiKey=${apiKey}`)
    return res
}

export const getArticlesByCategory = (typeOfArticles: String) => {
    const res = api.get(`/top-headlines?country=br&category=${typeOfArticles}&pageSize=10&apiKey=${apiKey}`)
    return res
}

export const getArticlesBySearch = (searchKey: String) => {
    const res = api.get(`/everything?q=${searchKey}&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`)
    return res
}
