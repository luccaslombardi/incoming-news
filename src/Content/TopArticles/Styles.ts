import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    TopArticlesHeader: {
        fontSize: 32,
        marginLeft: 20,
        marginBottom: 10
    },
    topArticle: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#f8f8f8',
        borderRadius: 10,
        height: 350,
        width: 300,
        margin: 10,
    },
    topArticleImage: {
        width: 298,
        height: 200,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    topContentArticle: {
        alignText: 'justify',
        justifyContent: 'center',
        padding: 20
    },
    topArticleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
   
});

export default styles