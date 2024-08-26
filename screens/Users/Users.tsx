import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import userData from '../../assets/users.json';
import UserBlock from '../../components/UserBlock/userBlock';
import imageMap from '../../assets/imageMap';

type UsersProps = {
  id: number;
  user: string;
  userName: string;
  image: string;
  title: string;
  text: string;
  date: string;
  like: number;
  dislike: number;
};

const Users = () => {
  const [users, setUsers] = useState<UsersProps[]>([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    {users.map((user: UsersProps) => {
      const imageSource = imageMap[user.image];
      console.log(`Loading image for ${user.userName}:`, user.image);
      return (
        <UserBlock
          key={user.id}
          img={imageSource}
          userName={user.userName}
          header={user.title}
          text={user.text}
          date={user.date}
          like={user.like}
          dislike={user.dislike}
        />
      );
    })}
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default Users;
