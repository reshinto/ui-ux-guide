import React from "react";
import {View as DefaultView} from "react-native";
import {useThemeColor} from "../../utils/helpers/themedComponents";
import {ViewProps} from "./themedComponentsTypes";

const View = (props: ViewProps) => {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const backgroundColor = useThemeColor(
    {light: lightColor, dark: darkColor},
    "background"
  );

  return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
};

export default View;
