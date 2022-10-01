import React from 'react';
import { useState } from 'react';
import { ScrollView, Text, View, TextInput, Pressable } from 'react-native';
import { SearchMechanic } from '../../Contents/SearchMechanic/Index';


export function Search({ navigation }: any) {
    const [searchWord, setSearchWord] = useState("")
    const [searchWordOnProps, setSearchWordOnProps] = useState("")


    return (
        <View>
            <View>
                <TextInput
                    onChangeText={setSearchWord}
                />
                <Pressable onPress={() => setSearchWordOnProps(searchWord)}>
                    <Text>Opa</Text>
                </Pressable>
            </View>



            <ScrollView>
                <SearchMechanic searchKey={searchWordOnProps} navigationParam={navigation} />
            </ScrollView>
        </View>

    )
}