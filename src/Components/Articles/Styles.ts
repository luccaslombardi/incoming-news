import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    articleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40
    },
    topArticle: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        borderColor: '#c4c4c4',
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
    article: {
        flexDirection: 'row',
        height: 100,
        width: 400,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
    },
    imageContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50
    },
    articleImage: {
        width: 75,
        height: 75,
        borderRadius: 10
    },
    contentArticle: {
        alignText: 'justify',
        justifyContent: 'center',
        padding: 20,
        width: 300
    },
    articleTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    articleDate: {
        fontSize: 10,
        paddingVertical: 5
    },
    articleDescription: {
        fontSize: 12,
        maxLength: 6,
        numberOfLines: 2,
        ellipsizeMode: "tail"
    }

});

export default styles