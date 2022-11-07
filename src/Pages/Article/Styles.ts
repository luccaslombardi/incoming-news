import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   container: {
        backgroundColor: '#f5f5f5',
        flex: 1
    },
    article: {
        backgroundColor: '#f5f5f5',
        flex: 1,
    },
    articleContainer: {
        flex: 1,
        padding: 25
    },
    articleTitle: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    publishedDate: {
        marginBottom: 5,
        textAlign: 'left'
    },
    articleContent: {
        textAlign: 'justify',
        fontSize: 16,
        lineHeight: 20,
    },
    articleSpace: {
        height:1,
        backgroundColor: '#c4c4c4',
        marginVertical: 25
    },
    pressableContainer: {
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1b1b1c'
    },
    pressableText: {
        fontSize: 16,
        color: '#f5f5f5'
    }
});

export default styles