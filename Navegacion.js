import React from "react"
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //1. importar tab
import { NavigationContainer } from "@react-navigation/native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import Home from "./my-project/Navegacion/Home";
import Home2 from "./my-project/Navegacion/Home2";
import HomeBtn from "./my-project/Navegacion/HomeBtn";


const TabNav = createBottomTabNavigator();

function Tabs (){

    return (
        <TabNav.Navigator>
            <TabNav.Screen name="Pantalla Principal" component={Home} initialRouteName="Home" screenOption/>
            <TabNav.Screen name="Pantalla Secundaria" component={Home2} />
            <TabNav.Screen name="Boton" component={HomeBtn} />            
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

