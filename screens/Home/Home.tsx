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
      <Animated.View style={[{
        opacity: fadeAnim,
      }]}>
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
      </View>
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
});

export default HomeScreen;
