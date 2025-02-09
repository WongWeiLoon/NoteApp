import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "./screens/Home"
import SummaryScreen from "./screens/Summary"
import NewNoteScreen from "./screens/NewNote"

// Import SVG icons
import HomeSvg from "./assets/Home.svg";
import SummarySvg from './assets/Summary.svg';
import AddSvg from "./assets/Add.svg";

// import HomePng from "./assets/Home.png";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'red', // Active tab color
          tabBarInactiveTintColor: 'gray', // Inactive tab color
          tabBarIcon: ({ focused, color, size }) => {
            let IconComponent;

            if (route.name === 'Home') {
              IconComponent = HomeSvg;
            } else if (route.name === 'Summary') {
              IconComponent = SummarySvg;
            } else if (route.name === ' ') {
              IconComponent = AddSvg;
            }

            // Return the SVG component
            return <IconComponent width={50} height={47} fill={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          // options={{
          //   tabBarIcon: ({ focused, color, size }) => (
          //     <Image source={HomePng} style={{height: 40, with: 10, tintColor: focused ? "red" : 'gray'}} />
          //   ),
          // }}
        />
        <Tab.Screen name=" " component={NewNoteScreen} />
        <Tab.Screen 
          name="Summary"
          component={SummaryScreen}
          options={{
            headerShown: false, // Hides the top bar
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
