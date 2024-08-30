import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

import MainButton from '../../components/Buttons/MainButton/MainButton';
import {HomeScreenNavigationProp} from '../../types/navigationTypes';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const onUsersCPress = () => navigation.navigate('Users');

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const springAnim = useRef(new Animated.Value(0)).current;

  const startSprnganimation = () => {
    Animated.spring(springAnim, {
      toValue: 1,
      friction: 2,
      tension: 150,
      useNativeDriver: true,
    }).start();
  };

  const backSprnganimation = () => {
    Animated.spring(springAnim, {
      toValue: 0,
      friction: 2,
      tension: 150,
      useNativeDriver: true,
    }).start();
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.homeView}>
      <Animated.View
        style={[
          {
            opacity: fadeAnim,
          },
        ]}>
        <Text style={styles.homeText}>Weather App</Text>
      </Animated.View>
      <View style={styles.buttonBlock}>
        <MainButton
          icon={<Icon name="arrow-forward" size={20} color="white" />}
          onPress={() => {}}
          title="Go to check Weather"
          color="lightblue"
        />
        <MainButton
          onPress={onUsersCPress}
          title="Go to users"
          color="lightblue"
        />
        <MainButton onPress={fadeIn} title="FadeIn" color="lightblue" />
        <MainButton onPress={fadeOut} title="FadeOut" color="lightblue" />
        <MainButton onPress={startSprnganimation} title="SpringUp" color="lightblue" />
        <MainButton onPress={backSprnganimation} title="SpringDown" color="lightblue" />
      </View>
      <Animated.View
        style={[
          styles.animatedBox,
          {
            transform: [
              {
                translateY: springAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -100],
                }),
              },
            ],
          },
        ]}>
                  <Text>123</Text>
        </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeView: {
    marginTop: 50,
    alignItems: 'center',
  },
  homeText: {
    fontSize: 26,
    color: 'black',
  },
  buttonBlock: {
    marginTop: 20,
    gap: 10,
  },
  animatedBox: {
    marginTop: 150,
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
