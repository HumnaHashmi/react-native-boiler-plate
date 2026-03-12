import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { DrawerActions
 } from '@react-navigation/native';
 import { NavigationService } from '../config/navigation/NavigationService';
 import { useNavigation } from '@react-navigation/native';
const DrawerIcon = () => {
    const navigation=useNavigation()
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        // style={{ marginLeft: 15 }}
      >
        <Text style={{ fontSize: 24 }}>☰</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DrawerIcon

const styles = StyleSheet.create({})