import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './Pages/Home/Home'
import { TabActionHelpers } from '@react-navigation/native'
import { View } from 'react-native'

const Tab = createBottomTabNavigator()

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} />
        </Tab.Navigator>
    )
}