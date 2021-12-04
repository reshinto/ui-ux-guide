import React from "react";
import {Text as DefaultText} from "react-native";
import {useThemeColor} from "../../utils/helpers/themedComponents";
import {TextProps} from "./themedComponentsTypes";

const Text = (props: TextProps) => {
  const {style, lightColor, darkColor, ...otherProps} = props;
  const color = useThemeColor({light: lightColor, dark: darkColor}, "text");

  return <DefaultText style={[{color}, style]} {...otherProps} />;
};

export default Text;
