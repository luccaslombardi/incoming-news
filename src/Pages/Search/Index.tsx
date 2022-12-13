import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Articles } from '../../Components/Articles/Index';
import { StackProps } from '../../Global/types';
import styles from './Styles';


export function Search({ navigation }: StackProps) {

    const [searchWord, setSearchWord] = useState("")
    const [searchWordOnProps, setSearchWordOnProps] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    onChangeText={setSearchWord}
                    placeholder="Digite aqui..."
                />
                <Pressable onPress={() => setSearchWordOnProps(searchWord)} style={styles.searchButton}>
                    <AntDesign name="search1" size={22} color="#8c8c8c" />
                </Pressable>
            </View>

            <View style={searchWordOnProps ? styles.searchedArticlesContainer : styles.emptySearchedContainer}>
                {searchWordOnProps ? (
                    <Articles typeOfArticles="search" searchKey={searchWordOnProps} navigationParam={navigation} />
                ) : (
                    <View style={styles.emptySearchedView}>
                        <AntDesign name="search1" size={32} color="#a7a7a8" />
                        <Text style={styles.emptySearchedText}>Seus artigos procurados aparecerão aqui</Text>
                    </View>
                )}
            </View>
        </View>

    )
}