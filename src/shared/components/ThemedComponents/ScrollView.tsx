import React from "react";
import {ScrollView as DefaultScrollView} from "react-native";
import {useThemeColor} from "../../utils/helpers/themedComponents";
import {ScrollViewProps} from "./themedComponentsTypes";

const ScrollView = (props: ScrollViewProps) => {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    "background"
  );

  return (
    <DefaultScrollView style={[{backgroundColor}, style]} {...otherProps} />
  );
};

export default ScrollView;
