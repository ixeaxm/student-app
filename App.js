import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screen/HomeScreen'
import AllStudentScreen from './screen/AllStudentScreen'
import MenuScreen from './screen/MenuScreen'
import SettingScreen from './screen/SettingScreen'


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#f873ffff',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            backgroundColor: '#fff',
            paddingBottom: 8,
            paddingTop: 8,
            heigh: 65,
            borderTopWidth: 1,
            borderTopColor: '#ff30b2',
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '600',
            marginTop: 2,
          },
          headerStyle: {
            backgroundColor: '#ff70fdff',
            elevation: 5,
            shadowOpacity: 0.3,
            shadowRadius: 5,
          },
          headerTintColort: '#fff',
          headerTintStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          }
        }}
      >

        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Text style={{ fontSize: size}}>🏠</Text>
            )
          }}
        />

        <Tab.Screen
          name='ข้อมูลของนักเรียนร่วมห้อง'
          component={AllStudentScreen}
          options={{
            tabBarLabel: 'Allstudent',
            tabBarIcon: ({color, size}) => (
              <Text style={{ fontSize: size}}>🧑‍💻</Text>
            )
          }}
        />

        <Tab.Screen
          name='เมนู'
          component={MenuScreen}
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({color, size}) => (
              <Text style={{ fontSize: size}}>💼</Text>
            )
          }}
        />

        <Tab.Screen
          name='ตั่งค่า'
          component={SettingScreen}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({color, size}) => (
              <Text style={{ fontSize: size}}>💼</Text>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}