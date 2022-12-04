import { Text, View, Image, Linking, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import styles from './Styles';
import { convertStringToDate } from '../../Utils/convertStringToDate'
import { StackArticleProps } from "../../Routes";

export function Article({ route }: StackArticleProps) {

    const { title, url, urlToImage, publishedAt, content } = route.params.article

    //constantes para estilização da imagem
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.article}>
                <Image source={{ uri: urlToImage }} style={{ width: imageWidth, height: imageHeight }} />

                <View style={styles.articleContainer}>
                    <Text style={styles.publishedDate}>{convertStringToDate(publishedAt)}</Text>
                    <Text style={styles.articleTitle}>{title}</Text>
                    <View style={styles.articleSpace} />
                    <Text style={styles.articleContent}>{content.split("[")[0]}</Text>
                </View>
            </ScrollView>

            <TouchableOpacity
                style={styles.pressableContainer}
                onPress={() => {
                    Linking.openURL(`${url}`);
                }}>
                <Text style={styles.pressableText}>Clique aqui para ver o artigo completo</Text>
            </TouchableOpacity>
        </View>
    )

}