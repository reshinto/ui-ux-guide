import React from "react";
import Svg, {Path} from "react-native-svg";
import {getThemeColor} from "../../shared/utils/helpers";

export default ({style}: any) => {
  const color = getThemeColor("text");
  return (
    <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={style}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0352 15.6969L11.3782 31.3539H4.15189L4.14722 24.1229L19.8042 8.46588L27.0352 15.6969Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.8042 8.46589L22.5004 5.76967C23.672 4.5981 25.5715 4.5981 26.7431 5.76967L29.7314 8.75801C30.903 9.92958 30.903 11.8291 29.7314 13.0006L27.0352 15.6969V15.6969"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
