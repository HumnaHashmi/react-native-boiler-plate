import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Login,
  // Register,
//   ForgotPassword,
//   Verification,
//   SetPassword,
} from '../screen/Auth';

const Stack = createNativeStackNavigator();

const AuthStack = () => {

  console.log(Login,"LoginStack")
  
 return (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
  <Stack.Screen name="Login" component={Login} />
  {/* <Stack.Screen name="Register" component={Register} /> */}
  {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
  <Stack.Screen name="Verification" component={Verification} />
  <Stack.Screen name="SetPassword" component={SetPassword} /> */}
</Stack.Navigator>
 )
}; 

export default AuthStack;
