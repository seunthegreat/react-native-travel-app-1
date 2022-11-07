import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//--screens--//
import TabNavigator from './TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerShown: false,
        }}
      >
      <Stack.Screen name="Root" component={TabNavigator} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;