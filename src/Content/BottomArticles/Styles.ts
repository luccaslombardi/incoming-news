import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    bottomArticlesHeader: {
        fontSize: 32,
        marginLeft: 20,
        marginVertical: 10
    },
    bottomArticleContainer: {
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40
    },
    bottomArticle: {
        flexDirection: 'row',
        height: 100,
        width: 400,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
    },
    bottomArticleImageContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50
    },
    bottomArticleImage: {
        width: 75,
        height: 75,
        borderRadius: 10
    },
    bottomContentArticle: {
        alignText: 'justify',
        justifyContent: 'center',
        padding: 20,
        width: 300
    },
    bottomArticleTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    bottomArticleDescription: {
        fontSize: 12,
        maxLength: 6,
        numberOfLines: 2,
        ellipsizeMode: "tail"
    }

});

export default styles