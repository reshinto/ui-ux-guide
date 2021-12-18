import React from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";

import View from "../ThemedComponents/View";
import {getThemeColor} from "../../utils/helpers";
import ContentsIcon from "../../../assets/svgs/ContentsIcon.svg";

function ScreenTitle({svgScreenTitle: SvgScreenTitle}: any) {
  return (
    <View style={styles.svgContainer}>
      <SvgScreenTitle fill={getThemeColor("text")} />
      <ContentsIcon />
    </View>
  );
}

export default ScreenTitle;

const styles = StyleSheet.create({
  svgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: normalize(20),
    paddingRight: normalize(20),
    marginBottom: normalize(32),
  },
});
