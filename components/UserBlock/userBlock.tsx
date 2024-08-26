import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageSourcePropType,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

type UserBlockTypes = {
  img: ImageSourcePropType | undefined;
  userName: string;
  header: string;
  text: string;
  date: string;
  like: number;
  dislike: number;
};

const UserBlock = ({
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

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.avatar} source={img} />
        <Text>{userName}</Text>
      </View>
      <Text>{header}</Text>
      <Text>{shortText(text)}</Text>
      <Text>{date}</Text>
      <Icon name="like" size={10} color="red">
        <Text>{like}</Text>
      </Icon>
      <Icon name="dislike" size={10} color="grey">
        <Text>{dislike}</Text>
      </Icon>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
  avatar: {
    borderRadius: 50,
    width: 45,
    height: 45,
  },
  top: {
    flex: 2,

  }
});

export default UserBlock;
