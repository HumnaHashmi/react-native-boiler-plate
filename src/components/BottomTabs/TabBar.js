import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import TabItem from '../../components/Shared/TabIcon';
import { Colors, Metrix } from '../../config/theme';

export default function TabBar({ state, navigation, onFabPress }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => navigation.navigate(route.name);

        // Center FAB
        if (route.name === 'CreateTask') {
          return (
            <View key={route.key} style={styles.fabContainer}>
              <TouchableOpacity
                onPress={onFabPress}
                style={styles.fabButton}
                activeOpacity={0.8}
              >
                <Entypo name="plus" size={36} color={Colors.white} />
              </TouchableOpacity>
            </View>
          );
        }

        
        return (
          <TabItem
            key={route.key}
            route={route}
            isFocused={isFocused}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Metrix.VerticalSize(80),
    backgroundColor: Colors.white,
    borderTopWidth: 0,
    paddingHorizontal: Metrix.HorizontalSize(20),
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 30,
    marginHorizontal: Metrix.HorizontalSize(10),
    marginBottom: Platform.OS === 'ios' ? 20 : 10,
  },
  fabContainer: {
    flex: 1,
    alignItems: 'center',
    top: -30, // makes the FAB float above
  },
  fabButton: {
    width: Metrix.HorizontalSize(64),
    height: Metrix.HorizontalSize(64),
    borderRadius: Metrix.HorizontalSize(32),
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
});
