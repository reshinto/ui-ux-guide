import React from "react";
import Svg, {Path} from "react-native-svg";
import {getThemeColor} from "../../shared/utils/helpers";

export default ({style}: any) => {
  const color = getThemeColor("text");
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={style}>
      <Path
        d="M6 2V10"
        stroke={color}
        stroke-linecap="square"
        stroke-linejoin="round"
      />
      <Path
        d="M10 6H2"
        stroke={color}
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
