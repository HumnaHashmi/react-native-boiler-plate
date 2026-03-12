import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Colors,Metrix } from '../config/theme';

const Search = ({name}) => {
  return (
    <View style={styles.searchContainer}>
      <EvilIcons
        name="search"
        size={24}
        color={Colors.darkGray}
        style={styles.icon}
      />
      <TextInput
        placeholder={name}
        placeholderTextColor={Colors.darkGray}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: Metrix.VerticalSize(45),
    backgroundColor: Colors.white,
    borderRadius: Metrix.Radius,
    borderWidth: 1,
    borderColor: Colors.gray,
    paddingHorizontal: Metrix.HorizontalSize(10),
    marginTop: Metrix.VerticalSize(20),
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: Metrix.HorizontalSize(10),
  },
  input: {
    flex: 1,
    fontSize: Metrix.FontRegular,
    color: Colors.black,
  },
});

export default Search;
