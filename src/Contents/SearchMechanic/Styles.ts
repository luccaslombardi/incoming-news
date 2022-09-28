import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    articleContainer: {
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40
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
    articleDescription: {
        fontSize: 12,
        maxLength: 6,
        numberOfLines: 2,
        ellipsizeMode: "tail"
    }

});

export default styles