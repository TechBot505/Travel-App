import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dashboard, OnBoardingScreen, PersonalList, Profile, SharedList, LoginScreen } from './app/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      elevation: 0,
      backgroundColor: "#ffffff",
      borderRadius: 15,
      height: 60,
    }
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="Dashboard"  
          component={Dashboard} 
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: "center", justifyContent: "center"}}>
                <Entypo name="home" size={24} color="black" />
                <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 12}}>Dashboard</Text>
              </View>
            )
          }} 
        />
        <Tab.Screen 
          name="PersonalList" 
          component={PersonalList} 
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: "center", justifyContent: "center"}}>
                <Entypo name="list" size={24} color="black" />
                <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 12}}>Personal List</Text>
              </View>
            )
          }}
        />
        <Tab.Screen 
          name="SharedList" 
          component={SharedList} 
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: "center", justifyContent: "center"}}>
                <Entypo name="share" size={24} color="black" />
                <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 12}}>Shared List</Text>
              </View>
            )
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: "center", justifyContent: "center"}}>
                <FontAwesome5 name="user-tie" size={24} color="black" />
                <Text style={{color: focused ? "#e32f45" : "#748c94", fontSize: 12}}>Profile</Text>
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
