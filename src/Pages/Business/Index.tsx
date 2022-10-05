import React from 'react';
import { ScrollView } from 'react-native';
import { Articles } from '../../Components/Articles/Index';
import styles from './Styles';

export function Business({ navigation }: any) {
    return (
        <ScrollView style={styles.container}>
            <Articles typeOfArticles="business" navigationParam={navigation} />
        </ScrollView>
    )
}