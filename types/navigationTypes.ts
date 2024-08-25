import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  UsersScreen: undefined;
  UserPost: { userId: string };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList
>;
