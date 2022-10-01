import { Text, View, Image, Button, Alert } from "react-native";

export function Article({ route }: any) {
    const { title, description, urlToImage, publishedAt, content } = route.params

    return (
        <View>
            <Image source={{ uri: urlToImage }} style={{ width: 100, height: 100 }} />
            <Text>{title}</Text>
            <Text>{publishedAt}</Text>
            <Text>{content}</Text>
            <Button title="Add" onPress={() => Alert.alert('You press the button')}></Button>
        </View>
    )

}