import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MainButton from '../../components/Buttons/MainButton/MainButton';
import {HomeScreenNavigationProp} from '../../types/navigationTypes';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const onCheckWeatherPress = () => navigation.navigate('Users');
  return (
    <View style={styles.homeView}>
      <Text style={styles.homeText}>Weather App</Text>
      <View style={styles.buttonBlock}>
        <MainButton
          icon={<Icon name="arrow-forward" size={20} color="white" />}
          onPress={() => {}}
          title="Go to check Weather"
          color="lightblue"
        />
        <MainButton
          onPress={onCheckWeatherPress}
          title="Go to users"
          color="lightblue"
        />
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
    gap: 10,
  },
});

export default HomeScreen;
