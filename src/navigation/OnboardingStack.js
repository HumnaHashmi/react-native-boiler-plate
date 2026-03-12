import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  OnBoarding  from '../screen/OnBoarding/OnBoarding';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="OnBoarding" component={OnBoarding} />
  </Stack.Navigator>
);

export default OnboardingStack;
