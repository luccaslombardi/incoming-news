import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { } from '@react-navigation/elements'
import { Home } from '../Pages/Home/Index'
import { Sports } from '../Pages/Sports/Index'
import { Search } from '../Pages/Search/Index'
import { Business } from '../Pages/Business/Index'

const Tab = createBottomTabNavigator()

export function Routes() {
    return (
        <Tab.Navigator >
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="business" component={Business} />
            <Tab.Screen name="sports" component={Sports} />
            <Tab.Screen name="search" component={Search} />
        </Tab.Navigator>
    )
}