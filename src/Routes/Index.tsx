import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { } from '@react-navigation/elements'
import { Home } from '../Pages/Home/Index'
import { TopArticles } from '../Contents/TopArticles/Index'
import { Article } from '../Pages/Article/Index'
import { Sports } from '../Pages/Sports/Index'
import { Search } from '../Pages/Search/Index'
import { Business } from '../Pages/Business/Index'

const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator();
const BusinessStack = createNativeStackNavigator();
const SportsStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();


function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="home" component={Home} />
            <HomeStack.Screen name="article" component={Article} />
        </HomeStack.Navigator>
    );
}

function BusinessStackScreen() {
    return (
        <HomeStack.Navigator>
            <BusinessStack.Screen name="business" component={Business} />
            <BusinessStack.Screen name="article" component={Article} />
        </HomeStack.Navigator>
    );
}

function SportsStackScreen() {
    return (
        <HomeStack.Navigator>
            <SportsStack.Screen name="sports" component={Sports} />
            <SportsStack.Screen name="article" component={Article} />
        </HomeStack.Navigator>
    );
}

function SearchStackScreen() {
    return (
        <HomeStack.Navigator>
            <SearchStack.Screen name="search" component={Search} />
            <SearchStack.Screen name="article" component={Article} />
        </HomeStack.Navigator>
    );
}

export function TabRoutes() {
    return (

        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="home" component={HomeStackScreen} />
            <Tab.Screen name="business" component={BusinessStackScreen} />
            <Tab.Screen name="sports" component={SportsStackScreen} />
            <Tab.Screen name="search" component={SearchStackScreen} />
        </Tab.Navigator>
    )
}




