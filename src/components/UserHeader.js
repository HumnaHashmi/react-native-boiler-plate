import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Colors, Metrix} from '../config/theme';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const UserHeader = () => {
  const userData = [
  {  name: 'Alex Johonson',
    profile: 'https://i.ibb.co/qF8qRnK/upload-1.png',}
  ];

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.user}>
          <View style={styles.leftSection}>
            <FastImage
              source={{uri: userData[0]?.profile}}
              style={styles.avator}
            />
            <View style={styles.userData}>
              <Text style={styles.greeting}>Good Morning</Text>
              <Text style={styles.userName}>{userData[0]?.name}</Text>
            </View>
          </View>
          <EvilIcons
            name="bell"
            color={Colors.black}
            size={25}
            style={{marginRight: 20}}
          />
        </View>
      </View>
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: Metrix.VerticalSize(34),
  },
  avator: {
    height: 34,
    width: 34,
    borderRadius: Metrix.Radius,
  },
  userContainer: {
    alignSelf: 'center',
    width: '90%',
    height: 80,
    backgroundColor: Colors.white,
    paddingVertical: Metrix.VerticalSize(20),
    // borderRadius: Metrix.Radius,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: Metrix.HorizontalSize(20),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrix.HorizontalSize(21),
  },
  userData: {
    flexDirection: 'column',
    justifyContent: 'center',
    // width: '100%',
    paddingHorizontal: Metrix.HorizontalSize(21),
  },
  userName: {
    color: Colors.black,
    fontSize: Metrix.FontMedium,
  },
  greeting: {
    color: Colors.black,
  },
});
