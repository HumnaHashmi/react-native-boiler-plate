import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import {Metrix, Colors} from '../../config/theme' 
import { NavigationService } from '../../config/navigation/NavigationService';
import { Button, Input } from '../../components';
import Images from '../../components/constants/Images'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Password from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import {login } from '../../redux/Slice/AuthSlice'
export default function Login() {
const dispatch=useDispatch()

const handleLogin = () => {
  dispatch(
    login({
      id: 1,
      name: 'alice',
      email: 'alice@yopmail.com',
    }),
  );

  // NavigationService.navigate('DrawerStack');
};




  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.desc}> Sigin int oaccess your task and team</Text>

      <View style={styles.formContaner}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <Input
              leftIcon={
                <Fontisto
                  name="email"
                  color={Colors.darkGray}
                  size={24}
                  style={styles.icon}
                />
              }
              placeholder="you@example.com"
              value=""
              onChangeText={{}}
              inputStyle={styles.inputStyle}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <Input
              leftIcon={
                <Password
                  name="lock"
                  color={Colors.darkGray}
                  size={24}
                  style={styles.icon}
                />
              }
              placeholder="you@example.com"
              value=""
              onChangeText={{}}
              rightIcon={
                <Feather name="eye" color={Colors.darkGray} size={24} />
              }
              inputStyle={styles.inputStyle}
            />
          </View>
        </View>
      </View>
      <View style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </View>
      <Button
        title="Sign in"
        onPress={handleLogin}
      />
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.lineText}>OR CONTINUE WITH</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Google"
          titleStyle={styles.buttonText}
          buttonStyle={styles.buttonStyle}
          image={<Image source={Images.google} style={styles.image} />}
        />
        <Button
          title="Facebook"
          titleStyle={styles.buttonText}
          buttonStyle={styles.buttonStyle}
          leftIcon={<Ionicons name="logo-facebook" size={18} color={'black'} />}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text> Dont have an account </Text>
        <TouchableOpacity
          onPress={() => NavigationService.navigate('Register')}
        >
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Metrix.HorizontalSize(20),
    paddingTop: Metrix.VerticalSize(100),
    // justifyContent:'center',
    alignItems: 'center',
  },

  formContaner: {
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginVertical: Metrix.VerticalSize(10),

    gap: 15,
  },
  inputWrapper: {
    alignSelf: 'center',
  },
  label: {
    color: Colors.black,
    marginVertical: Metrix.VerticalSize(10),
    fontSize: Metrix.FontRegular,
    marginLeft: Metrix.HorizontalSize(20),
  },
  title: {
    fontSize: Metrix.FontExtraLarge,
    color: Colors.black,
    alignItems: 'center',
    marginVertical: Metrix.VerticalSize(10),
    // fontWeight: Fonts.Bold,
  },
  desc: {
    marginBottom: Metrix.VerticalSize(15),
    fontSize: Metrix.FontMedium,
  },
  inputStyle: {},
  icon: {
    // marginTop:Metrix.VerticalSize(10)
  },
  forgotContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: Metrix.VerticalSize(30),
  },
  forgotText: {
    color: Colors.blue,
    fontSize: Metrix.FontSmall,
  },
  orContainer: {
    marginVertical: Metrix.VerticalSize(30),
    flexDirection: 'row',
    alignItems: 'center',
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.darkGray,
  },
  lineText: {
    marginHorizontal: Metrix.HorizontalSize(10),
    color: Colors.darkGray,
    fontSize: Metrix.FontSmall,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  buttonStyle: {
    width: '45%',
    backgroundColor: Colors.white,
    borderColor: Colors.gray,
    borderWidth: 2,
  },
  buttonText: {
    color: Colors.black,
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: Metrix.Radius,
    marginRight: 12,
  },
  bottomContainer: {
    marginTop: Metrix.VerticalSize(80),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signup: {
    color: Colors.blue,
  },
});
