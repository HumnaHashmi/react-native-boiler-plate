// import React from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { DrawerActions } from '@react-navigation/native';
// import HomeStack from './HomeStack';
// import { Profile } from '../screen/Dashboard';
// const Drawer = createDrawerNavigator();

// const DrawerStack = () => {

//   console.log(HomeStack, "Homestack atdrawer")

//   return (
//     <Drawer.Navigator
//       screenOptions={({ navigation }) => ({
//         headerShown: true,
//         headerLeft: () => (
//           <TouchableOpacity
//             onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//             style={{ marginLeft: 15 }}
//           >
//             <Text style={{ fontSize: 24 }}>☰</Text>
//           </TouchableOpacity>
//         ),
//       })}
//       drawerContent={() => (
//         <View>
//           <Text>Hello</Text>
//         </View>
//       )}
//     >
//       <Drawer.Screen name="Home" component={HomeStack} />
//       {/* <Drawer.Screen name="Profile" component={Profile} /> */}
//     </Drawer.Navigator>
//   );
// };

// export default DrawerStack;
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import HomeStack from './HomeStack';

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  return (
    <View style={styles.drawerContainer}>
      <Text style={styles.drawerTitle}>My App</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home')}
        style={styles.drawerItem}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        headerShown: false,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ marginLeft: 15 }}
          >
            <Text style={{ fontSize: 24 }}>☰</Text>
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  drawerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  drawerItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default DrawerStack;