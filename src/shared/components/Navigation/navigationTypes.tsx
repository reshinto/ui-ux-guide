import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Root: undefined;
  Home: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
