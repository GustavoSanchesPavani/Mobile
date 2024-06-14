import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Dolar from './src/pages/Dolar';
import Euro from './src/pages/Euro';
import Bitcoin from './src/pages/Bitcoin';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dólar') {
              iconName = focused ? 'cash' : 'cash-outline';
            } else if (route.name === 'Euro') {
              iconName = focused ? 'logo-euro' : 'logo-euro';
            } else if (route.name === 'Bitcoin') {
              iconName = focused ? 'logo-bitcoin' : 'logo-bitcoin';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelPosition: 'beside-icon',
        }}
      >
        <Tab.Screen name="Dólar" component={Dolar} />
        <Tab.Screen name="Euro" component={Euro} />
        <Tab.Screen name="Bitcoin" component={Bitcoin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
