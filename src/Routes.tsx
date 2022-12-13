import React from 'react'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { } from '@react-navigation/elements'
import { Home } from './Pages/Home/Index'
import { Article } from './Pages/Article/Index'
import { Sports } from './Pages/Sports/Index'
import { Search } from './Pages/Search/Index'
import { Business } from './Pages/Business/Index'
import { MaterialIcons } from '@expo/vector-icons';
import { StackParams, TabParams } from './Global/types';


const Tab = createMaterialBottomTabNavigator<TabParams>()
const HomeStack = createNativeStackNavigator<StackParams>();
const BusinessStack = createNativeStackNavigator<StackParams>();
const SportsStack = createNativeStackNavigator<StackParams>();
const SearchStack = createNativeStackNavigator<StackParams>();


//Rota de navegação para artigos clicados na aba Home
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="home" component={Home} options={{
                headerShown: true,
                title: 'Página Principal',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#d1061b',
                }
            }} />
            <HomeStack.Screen name="article" component={Article} options={{
                title: '',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#d1061b',
                }

            }} />
        </HomeStack.Navigator>
    );
}

//Rota de navegação para artigos clicados na aba Business
function BusinessStackScreen() {
    return (
        <HomeStack.Navigator>
            <BusinessStack.Screen name="business" component={Business} options={{
                headerShown: true,
                title: 'Negócios',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#002f54',
                },

            }} />
            <BusinessStack.Screen name="article" component={Article} options={{
                title: '',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#002f54',
                }

            }} />
        </HomeStack.Navigator>
    );
}

//Rota de nagegação para artigos clicados na aba Sports
function SportsStackScreen() {
    return (
        <HomeStack.Navigator>
            <SportsStack.Screen name="sports" component={Sports} options={{
                headerShown: true,
                title: 'Esportes',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#017a4a',
                }
            }} />
            <SportsStack.Screen name="article" component={Article} options={{
                title: '',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#017a4a',
                }
            }} />
        </HomeStack.Navigator>
    );
}

//Rota de navegação para artigos clicados na aba Search
function SearchStackScreen() {
    return (
        <HomeStack.Navigator>
            <SearchStack.Screen name="search" component={Search} options={{
                headerShown: true,
                title: 'Busca',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#7209b7',
                }
            }} />
            <SearchStack.Screen name="article" component={Article} options={{
                title: '',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#7209b7',
                }
            }} />
        </HomeStack.Navigator>
    );
}

//Rotas de navegação entre tabs (por categoria)
export function TabRoutes() {
    return (
        <Tab.Navigator
            initialRouteName="homeScreen"
            inactiveColor="#fff5f6"
        >
            <Tab.Screen name="homeScreen" component={HomeStackScreen} options={{
                tabBarLabel: 'Princpal',
                tabBarColor: "#d1061b",
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="home-filled" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="bussinessScreen" component={BusinessStackScreen} options={{
                tabBarLabel: 'Negócios',
                tabBarColor: "#002f54",
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="work" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="sportsScreen" component={SportsStackScreen} options={{
                tabBarLabel: 'Esportes',
                tabBarColor: "#017a4a",
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="sports-football" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="searchScreen" component={SearchStackScreen} options={{
                tabBarLabel: 'Busca',
                tabBarColor: "#7209b7",
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="search" color={color} size={26} />
                ),
            }} />
        </Tab.Navigator>
    )
}




