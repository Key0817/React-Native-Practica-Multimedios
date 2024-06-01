import React from "react"
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //1. importar tab
import { NavigationContainer } from "@react-navigation/native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
//import { createStackNavigator } from "@react-navigation/stack";


import Home from "./my-project/Navegacion/Home";
import Home2 from "./my-project/Navegacion/Home2";
import HomeBtn from "./my-project/Navegacion/HomeBtn";
import { createStackNavigator } from "@react-navigation/stack";


const TabNav = createBottomTabNavigator();
const Stack = createStackNavigator();

function Stacks (){
    return (
        <Stack.Navigator name="HomeStack" initialRouteName="HomeStack"component={Home}>
            <Stack.Screen name="HomeStack" component={Home}/>
            <Stack.Screen name="HomeStack2" component={Home2}/>
            <Stack.Screen name="HomeBtnStack" component={HomeBtn}/>
        </Stack.Navigator>
    );
}

function Tabs (){

    return (
        <TabNav.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                //tabBarActiveTintColor: 'green',
            }} >

            <TabNav.Screen 
                name="Home" 
                //component={Home} Esto llama a la pantalla de home
                component={Stacks} //Este otro a la funcion de stacks que esta aqui arriba
                options={{
                    tabBarLabel: 'Home', //se utiliza para asignar nombre a la opción del botón
                    tabBarIcon:  ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size}/> //se utiliza renderizar el icon
                        ),

                    //tabBarBadge: 3, //se utiliza para las notificaciones
                    headerShown: false, //oculta el header
                }}/>

            <TabNav.Screen name="Home2" component={Home2}/> 
            <TabNav.Screen name="Perfil" component={HomeBtn}
            options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='account' color={'green'} size={40}/>
                ),
                tabBarBadge: 2
            }}
            /> 
                    
        </TabNav.Navigator>
    );
}

export default function Navegacion() {
    return(  
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
     );
}

