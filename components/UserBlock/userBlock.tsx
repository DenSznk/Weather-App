import React from 'react';
import {Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

type UserBlockTypes = {
  img: string | undefined;
  header: string;
  text: string;
  date: string;
};

const userBlock = ({img, header, text, date}: UserBlockTypes) => {
  const getImageSource = (imgSource: string | undefined) => {
    try {
      imgSource
        ? require(`../../../${imgSource}`)
        : require('../../../public/img/default.jpg');
    } catch (error) {
      console.error(`Image not found ${imgSource}`);
      return require('../../../public/img/default.jpg');
    }
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.avatar} source={{uri: getImageSource(img)}} />
      <Text>{header}</Text>
      <Text>{text}</Text>
      <Text>{date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
  avatar: {
    borderRadius: 50,
    width: 45,
    height: 45,
  },
});

export default userBlock;
