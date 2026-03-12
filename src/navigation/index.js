// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { useSelector } from 'react-redux';
// import { ActivityIndicator, View } from 'react-native';
// import AuthStack from './AuthStack';
// import DrawerStack from './DrawerStack';
// import OnboardingStack from './OnboardingStack';
// // import DrawerStack from './DrawerStack';
// import {navigationRef} from '../config/navigation/NavigationService';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const RootNavigator = () => {
//   console.log('AuthStack:', AuthStack);
//   console.log('DrawerStack:', DrawerStack);
//   console.log('OnboardingStack:', OnboardingStack);

//   const user =useSelector(state=>state.auth.user)
 
//   const loading = false;

//   return (
//     <>
//       <NavigationContainer ref={navigationRef}>
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           {!user && (
//             <>
//               <Stack.Screen
//                 name="OnboardingStack"
//                 component={OnboardingStack}
//               />
//               <Stack.Screen name="AuthStack" component={AuthStack} />
//             </>
//           )}

//           {user && <Stack.Screen name="HomeStack" component={DrawerStack} />}
//         </Stack.Navigator>
//       </NavigationContainer>

//       {loading && (
//         <View
//           style={{
//             position: 'absolute',
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: 'rgba(0,0,0,0.4)',
//             width: '100%',
//             height: '100%',
//           }}
//         >
//           <ActivityIndicator size="large" color="#fff" />
//         </View>
//       )}
//     </>
//   );
// };

// export default RootNavigator;


// src/navigation/index.js - TEMPORARY TEST
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { navigationRef } from '../config/navigation/NavigationService';
import DrawerStack from './DrawerStack';
import AuthStack from './AuthStack';
import OnboardingStack from './OnboardingStack'
import { useSelector } from 'react-redux';
console.log('DrawerStack:', DrawerStack);
console.log('AuthStack', AuthStack)
console.log('OnboardingStack', OnboardingStack);

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user && (
          <>
            <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
            <Stack.Screen name="AuthStack" component={AuthStack} />
          </>
        )}
         <Stack.Screen name="HomeStack" component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
