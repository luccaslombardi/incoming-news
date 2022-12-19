import { Dispatch, SetStateAction, useEffect } from "react";
import { getArticlesByCategory, getArticlesBySearch, getBottomArticles, getTopArticles } from "../Service/api";


export function GetArticleByCategory(typeOfArticle: String, searchKey: String, setArticles: Dispatch<SetStateAction<never[]>>) {

    //chamadas das funções de request ded acordo com typeOfArticles passado como parâmetro 

    if (typeOfArticle === "business" || typeOfArticle === "sports") {
        useEffect(() => {
            getArticlesByCategory(typeOfArticle).then(response => {
                setArticles(response.data.articles);
            })
                .catch(err => { console.log(err); });
        }, [typeOfArticle])
    }

    else if (typeOfArticle === "homeBottomArticles") {
        useEffect(() => {
            getBottomArticles().then(response => {
                setArticles(response.data.articles);
            })
                .catch(err => { console.log(err); });
        }, [typeOfArticle])
    }

    else if (typeOfArticle === "homeTopArticles") {
        useEffect(() => {
            getTopArticles().then(response => {
                setArticles(response.data.articles);
            })
                .catch(err => { console.log(err); });
        }, [typeOfArticle])
    }

    else if (typeOfArticle === "search") {
        //useEffect será acionado toda vez que tiver alteração na palavra buscada em searchKey
        useEffect(() => {
            getArticlesBySearch(searchKey).then(response => {
                setArticles(response.data.articles);
            })
                .catch(err => { console.log(err); });
        }, [searchKey])
    }
}