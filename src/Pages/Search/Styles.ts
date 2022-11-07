import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    searchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        display: "flex",
        flexDirection: "row",
        margin: 10,
        paddingVertical:5,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 10
    },

    searchInput: {
        flex:8,
        paddingLeft: 15,
    },

    searchButton: {
        flex: 1,
    },

    searchedArticlesContainer: {
        flex: 1
    },
    
    emptySearchedContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },

    emptySearchedView: {
        alignItems: 'center',
    },

    emptySearchedText: {
        marginTop: 10,
        fontSize: 16,
        color: '#a7a7a8',

    }
});

export default styles