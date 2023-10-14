import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RegisterUser } from "./screens/RegisterUser.js"
import { Home } from "./screens/Home.js"
import { Movies } from "./screens/Movies.js"
import { About } from './screens/About.js'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName
            let rn = route.name

            if (rn === "Home"){
                iconName = focused ? "home" : "home-outline"
            } else if (rn == "Movies"){
                iconName = focused ? 'list' : 'list-outline'
            }  else if (rn == "Register User"){
                iconName = focused ? 'archive' : 'archive-outline'
            } else if (rn == "About"){
                iconName = focused ? 'settings' : 'settings-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#DD4124',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: {padding: 10, height: 70}
      })}>

        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Movies" component={Movies}/>
        <Tab.Screen name="Register User" component={RegisterUser}/>
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}