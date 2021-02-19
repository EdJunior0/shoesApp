import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {Home, Detail} from './pages'


export default function App() {

    let [fontsLoaded] = useFonts({
        Anton_400Regular,
    });

    if(!fontsLoaded){
        return <AppLoading/>
    }

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name='Home'
                component={Home}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name='Detail'
                component={Detail}
                />
            </Stack.Navigator>

            <StatusBar style='light' backgroundColor='#000' translucent={true} />
        </NavigationContainer>
    );
}
