import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Colors,Metrix } from '../../config/theme';
import Images from '../../config/Images';
import Swiper from 'react-native-swiper';
import { Button } from '../../components';
import ArrowRight from 'react-native-vector-icons/FontAwesome5';
import { NavigationService } from '../../config/navigation/NavigationService';
export default function OnBoarding() {
 return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} activeDotStyle={styles.activeDot}>
        <View style={styles.slidder1}>
          <Image source={Images.slide1} style={styles.image} />
          <Text style={styles.title}>Manage Task Effiecintly</Text>
          <Text style={styles.desc}>
            Organize your daily tasks and boost productivity with our intuitive
            task management system.
          </Text>
        </View>
        <View style={styles.slidder1}>
          <Image source={Images.slide2} style={styles.image} />
          <Text style={styles.title}>Manage Task Effiecintly</Text>
          <Text style={styles.desc}>
            Organize your daily tasks and boost productivity with our intuitive
            task management system.
          </Text>
        </View>
        <View style={styles.slidder1}>
          <Image source={Images.slide3} style={styles.image} />
          <Text style={styles.title}>Stay Connected</Text>
          <Text style={styles.desc}>
            Integrated chat and reminders ensure you never miss a deadline or an
            important update.
          </Text>
        </View>
      </Swiper>
      <View style={styles.buttonContainer}>
        <Button
          title="Skip"
          onPress={() => {}}
          buttonStyle={{ backgroundColor: Colors.white, width: '45%' }}
          titleStyle={{ color: Colors.darkGray }}
        />
        <Button
          title="Next"
          onPress={() => {
            NavigationService.resetStack('AuthStack');          }}
          buttonStyle={{ width: '45%' }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:Colors.white
  },
  image: {
    width: '50%',
    height: '25%',
    borderRadius: 100,
    borderWidth: 2,
  },
  slidder1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingTop: Metrix.VerticalSize(30),
    fontSize: Metrix.FontExtraLarge,
    color: Colors.black,
    fontWeight: 'bold',
  },
  desc: {
    paddingTop: Metrix.VerticalSize(10),
    paddingHorizontal: Metrix.HorizontalSize(25),
    textAlign: 'center',
    fontSize: Metrix.FontRegular,
    lineHeight: Metrix.VerticalSize(25),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: Metrix.HorizontalSize(10),
    marginBottom: Metrix.VerticalSize(60),
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: 30,
  },
});
