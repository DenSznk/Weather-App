import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Users: undefined;
  UserPost: { userId: string };
  Reanim: undefined
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList
>;
