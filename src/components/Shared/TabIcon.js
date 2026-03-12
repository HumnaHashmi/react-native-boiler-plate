import React from 'react';
import {TouchableOpacity, Text,StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { Colors,Metrix } from '../../config/theme';

export default function TabItem({route, isFocused, onPress}) {
    const getIcon = routeName => {
      switch (routeName) {
        case 'Home':
          return {lib:Feather, name:'home'};
        case 'Task':
            return {lib: Octicons, name: 'tasklist'};

        case 'Chat':
            return {lib: Feather, name: 'message-square'};

        case 'Calendar':
            return {lib: Feather, name: 'calendar'};
        
     
          default:
          return null;
      }
    };

    const iconData = getIcon(route?.name);

const IconComponent = iconData?.lib;
const iconName = iconData?.name;

  return (
    <TouchableOpacity onPress={onPress} style={styles.tabContainer}>
      {IconComponent && (
        <IconComponent
          name={iconName}
          size={20}
          color={isFocused ? Colors.primary : Colors.darkGray}
        />
      )}
      <Text style={styles.tabText}>
        {route.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: Metrix.HorizontalSize(12),
  },
  tabText: {
    textAlign: 'center',
  },
});
