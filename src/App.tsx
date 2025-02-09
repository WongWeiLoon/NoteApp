import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';
import SummaryScreen from './screens/Summary';
import NewNoteScreen from './screens/NewNote';
import SettingScreen from './screens/Settings';

// Import SVG icons
import BackSvg from './assets/images/ArrowLeft.svg';
import HomeTabSvg from './assets/tabSvg/HomeTab';
import SummaryTabSvg from './assets/tabSvg/SummaryTab';
import NewNoteTabSvg from './assets/tabSvg/NewNoteTab';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: 100,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            backgroundColor: '#1C0B37',
            paddingTop: 20, // Add some padding to help with vertical centering
            // paddingBottom: 20, // Add some padding at bottom for better appearance
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'PingFang SC',
            marginTop: 14, // Adjust spacing between icon and label
          },
          tabBarActiveTintColor: '#F94695', // Active tab color
          tabBarInactiveTintColor: '#918DAC', // Inactive tab color
        })}
      >
        {/* Home */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <HomeTabSvg 
                color={focused ? '#F94695' : '#918DAC'} 
              />
            ),
            headerStyle: {
              height: 100,
            },
          }}
        />

        {/* NewNote */}
        <Tab.Screen
          name=" "
          component={NewNoteScreen}
          options={({ navigation }) => ({
            tabBarStyle: { display: 'none' },
            headerStyle: {
              backgroundColor: '#1C0B37',
              height: 100,
            },
            headerTitleStyle: styles.headerTitleStyling,
            headerTitleAlign: 'left',
            headerTitle: 'New Note',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
              >
                <BackSvg width={28} height={28} />
              </TouchableOpacity>
            ),
            tabBarIcon: ({ focused, color }) => (
              <NewNoteTabSvg />
            ),
          })}
        />

        {/* Summary */}
        <Tab.Screen
          name="Summary"
          component={SummaryScreen}
          options={{
            headerShown: false, // Hides the top bar
            tabBarIcon: ({ focused, color }) => (
              <SummaryTabSvg
                color={focused ? '#F94695' : '#918DAC'} 
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  headerTitleStyling: {
    color: 'white',
    fontFamily: 'PingFang SC',
    fontSize: 26,
    lineHeight: 36,
  },
  backButton: {
    paddingLeft: 20,
    paddingRight: 15,
  },
});

export default App;
