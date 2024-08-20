import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


import MainButton from '../../components/Buttons/MainButton/MainButton';
import { HomeScreenNavigationProp } from '../types/navigationTypes';

type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
  };

function HomeScreen({navigation}: HomeScreenProps) {
    const onCheckWeatherPress = () => navigation.navigate('UsersScreen');
  return (
    <View style={styles.homeView}>
      <Text style={styles.homeText}>Home Screen</Text>
      <View style={styles.buttonBlock}>
        <MainButton onPress={onCheckWeatherPress} title="Go to check Weather" color="lightblue" />
        <MainButton onPress={() => {}} title="Go to users" color="lightblue" />
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
    flexDirection: 'row',
    gap: 20,
  },
});

export default HomeScreen;
