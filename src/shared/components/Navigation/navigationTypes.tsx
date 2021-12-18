import {RouteProp} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Root: undefined;
  Contents: undefined;
  About: undefined;
  ColumnGutterMargin: undefined;
  Always4pxSizing: undefined;
  AutoLayout: undefined;
  FillWithImage: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type ScreenRouteProps<Screen extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, Screen>;
