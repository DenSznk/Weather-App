import React, { useEffect, useState } from 'react';
import {Text, View} from 'react-native';
import userData from '../../publick/users.json';

type UsersProps = {
    id: number,
    user: string
    userName: string,
    image: string,
    title: string,
    text: string,
    date: string,
    like: number,
    dislike: number,
}

const Users = () => {
  const [users, setUsers] = useState<UsersProps[]>([]);
  useEffect(() => {
    setUsers(userData);
  }, []);
  return (
    <View>
      <Text>123</Text>
    </View>
  );
};

export default Users;
