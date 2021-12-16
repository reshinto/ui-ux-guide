import React from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";
import {LinearGradient} from "expo-linear-gradient";

import View from "../../ThemedComponents/View";
import {colors} from "../../../styles/palette";

function SliderBall() {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={[0, 0]}
        end={[1, 1]}
        style={[styles.ball]}
        colors={[colors.pink, colors.blue, colors.purple]}
      ></LinearGradient>
    </View>
  );
}

export default SliderBall;

const styles = StyleSheet.create({
  container: {
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(30),
    overflow: "hidden",
  },
  ball: {
    width: normalize(20),
    height: normalize(20),
  },
});
