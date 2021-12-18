import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";

import {getThemeColor} from "../../utils/helpers";
import View from "../ThemedComponents/View";

function Pointer() {
  return (
    <View style={styles.pointContainer}>
      <LinearGradient
        start={[0, 0]}
        end={[1, 1]}
        style={[styles.point]}
        colors={[
          getThemeColor("gradientOne"),
          getThemeColor("gradientTwo"),
          getThemeColor("gradientThree"),
        ]}
      ></LinearGradient>
    </View>
  );
}

export default Pointer;

const styles = StyleSheet.create({
  pointContainer: {
    width: normalize(4),
    height: normalize(4),
    marginRight: normalize(10),
    borderRadius: normalize(30),
    overflow: "hidden",
  },
  point: {
    width: normalize(4),
    height: normalize(4),
  },
});
