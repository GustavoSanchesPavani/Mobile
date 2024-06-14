import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Dolar from './src/pages/Dolar';
import Euro from './src/pages/Euro';
import Bitcoin from './src/pages/Bitcoin';

const Tab = createMaterialTopTabNavigator();

export default function ConversorModerno() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, marginTop: 30 }}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10 }}>CONVERSOR DE MOEDA</Text>
        <Tab.Navigator>
          <Tab.Screen name='Dolar' component={Dolar} />
          <Tab.Screen name='Euro' component={Euro} />
          <Tab.Screen name='Bitcoin' component={Bitcoin} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}
