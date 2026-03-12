import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import TaskDetail from '../screens/Dashobard/TaskDetail';
import BottomTabs from '../components/BottomTabs/BottomTabs';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
  
  console.log('BottomTabs:', BottomTabs);
return (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="BottomTabs" component={BottomTabs} />
    {/* <Stack.Screen name="Notification" component={Notification} /> */}
    {/* <Stack.Screen name="Profile" component={Profile} /> */}
    {/* <Stack.Screen name="TaskDetail" component={TaskDetail} /> */}
    {/* <Stack.Screen name="AccountSetting" component={AccountSetting} /> */}
  </Stack.Navigator>
)
};

export default HomeStack;
