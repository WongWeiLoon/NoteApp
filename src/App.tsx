import React from 'react';
import { StyleSheet, TouchableOpacity, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';
import SummaryScreen from './screens/Summary';
import NewNoteScreen from './screens/NewNote';
import SettingScreen from './screens/Settings';

// Import SVG icons
import BackSvg from './assets/images/ArrowLeft.svg';
import SettingSvg from './assets/images/Settings.svg';
import HomeTabSvg from './assets/tabSvg/HomeTab';
import SummaryTabSvg from './assets/tabSvg/SummaryTab';
import NewNoteTabSvg from './assets/tabSvg/NewNoteTab';

import { BAR_HEIGHT } from './shared/utils/constants';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); 

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"  // Changed from "Home" to "HomeScreen"
      component={HomeScreen}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#1C0B37',
          height: BAR_HEIGHT,
        },
        headerTitleStyle: styles.headerTitleStyling,
        headerTitleAlign: 'left',
        headerTitle: 'Home',  // Explicitly set the header title
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={styles.settingsButton}
          >
            <SettingSvg width={20} height={20} />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="Settings"
      component={SettingScreen}
      options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#1C0B37',
          height: BAR_HEIGHT,
        },
        headerTitle: 'Settings',
        headerTitleStyle: styles.headerTitleStyling,
        headerTitleAlign: 'left',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <BackSvg width={28} height={28} />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarStyle: {
            height: 100,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            backgroundColor: '#1C0B37',
            paddingTop: 20, // Add some padding to help with vertical centering
            // Hide bottom tab bar when in Settings screen
            display: navigation.getState().routes.some(
              route => route.state?.routes?.some(r => r.name === 'Settings')
            )
              ? 'none'
              : 'flex',
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
          component={HomeStack}
          options={{
            headerShown: false,  // Hide the Tab navigator's header
            tabBarIcon: ({ focused, color }) => (
              <HomeTabSvg 
                color={focused ? '#F94695' : '#918DAC'} 
              />
            ),
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
              height: BAR_HEIGHT,
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
  settingsButton: {
    paddingHorizontal: 20,
  },
});

export default App;
