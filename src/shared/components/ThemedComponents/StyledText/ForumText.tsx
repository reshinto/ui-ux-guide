import React from "react";
import {TextProps} from "../themedComponentsTypes";
import Text from "../Text";

function ForumText(props: TextProps) {
  return <Text {...props} style={[props.style, {fontFamily: "Forum"}]} />;
}

export default ForumText;
