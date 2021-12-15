import React from "react";
import {TextProps} from "../themedComponentsTypes";
import Text from "../Text";

function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, {fontFamily: "space-mono"}]} />;
}

export default MonoText;
