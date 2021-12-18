import {
  Text as DefaultText,
  View as DefaultView,
  ScrollView as DefaultScrollView,
  SafeAreaView as DefaultSafeAreaView,
} from "react-native";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type SafeAreaViewProps = ThemeProps & DefaultSafeAreaView["props"];
export type ScrollViewProps = ThemeProps & DefaultScrollView["props"];
