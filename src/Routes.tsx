import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { } from '@react-navigation/elements'
import { Home } from './Pages/Home/Index'
import { Article } from './Pages/Article/Index'
import { Sports } from './Pages/Sports/Index'
import { Search } from './Pages/Search/Index'
import { Business } from './Pages/Business/Index'
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator()
const HomeStack = createNativeStackNavigator();
const BusinessStack = createNativeStackNavigator();
const SportsStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();


function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="home" component={Home} options={{ headerShown: true }} />
            <HomeStack.Screen name="article" component={Article} />
        </HomeStack.Navigator>
    );
}

function BusinessStackScreen() {
    return (
        <HomeStack.Navigator>
            <BusinessStack.Screen name="business" component={Business} options={{ headerShown: true }} />
            <BusinessStack.Screen name="article" component={Article} />
        </HomeStack.Navigator>
    );
}

function SportsStackScreen() {
    return (
        <HomeStack.Navigator>
            <SportsStack.Screen name="sports" component={Sports} options={{ headerShown: true }} />
            <SportsStack.Screen name="article" component={Article} />
        </HomeStack.Navigator>
    );
}

function SearchStackScreen() {
    return (
        <HomeStack.Navigator>
            <SearchStack.Screen name="search" component={Search} options={{ headerShown: true }} />
            <SearchStack.Screen name="article" component={Article} />
        </HomeStack.Navigator>
    );
}

export function TabRoutes() {
    return (

        <Tab.Navigator
            initialRouteName="homePage"
            inactiveColor="#fff5f6"
        >
            <Tab.Screen name="homeScreen" component={HomeStackScreen} options={{
                tabBarLabel: 'Home',
                tabBarColor: "#d1061b",
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="home-filled" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="bussinessScreen" component={BusinessStackScreen} options={{
                tabBarLabel: 'Business',
                tabBarColor: "#002f54",
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="work" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="sportsScreen" component={SportsStackScreen} options={{
                tabBarLabel: 'Sports',
                tabBarColor: "#017a4a",
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="sports-football" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="searchScreen" component={SearchStackScreen} options={{
                tabBarLabel: 'Search',
                tabBarColor: "blue",
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="search" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    )
}




