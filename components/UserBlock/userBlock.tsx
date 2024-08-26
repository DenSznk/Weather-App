import React from 'react';
import {Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

type UserBlockTypes = {
  img: string | undefined;
  userName: string;
  header: string;
  text: string;
  date: string;
  like: number;
  dislike: number;
};

const userBlock = ({
  img,
  header,
  text,
  date,
  userName,
  like,
  dislike,
}: UserBlockTypes) => {

  const shortText = (textInput: string) => {
   return textInput.length > 40 ? textInput.slice(0, 39) + '...' : textInput;
  };
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
      <Text>{userName}</Text>
      <Text>{header}</Text>
      <Text>{shortText(text)}</Text>
      <Text>{date}</Text>
      <Icon name="like" size={20} color="red">
        <Text>{like}</Text>
      </Icon>
      <Icon name="dislike" size={20} color="grey">
        <Text>{dislike}</Text>
      </Icon>
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
