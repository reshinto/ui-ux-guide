import React from "react";
import {SafeAreaView as DefaultSafeAreaView} from "react-native-safe-area-context";
import {useThemeColor} from "../../utils/helpers/themedComponents";
import {SafeAreaViewProps} from "./themedComponentsTypes";

const SafeAreaView = (props: SafeAreaViewProps) => {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    "background"
  );

  return (
    <DefaultSafeAreaView style={[{backgroundColor}, style]} {...otherProps} />
  );
};

export default SafeAreaView;
