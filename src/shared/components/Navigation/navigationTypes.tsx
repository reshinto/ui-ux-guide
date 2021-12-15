import {RouteProp} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Root: undefined;
  Home: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type ScreenRouteProps<Screen extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, Screen>;
