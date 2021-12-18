import React from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";
import {LinearGradient} from "expo-linear-gradient";

import {getThemeColor} from "../../utils/helpers";
import View from "../ThemedComponents/View";

function GradientBackground({children}: any) {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={[0, 1]}
        end={[1, 1]}
        style={[styles.background]}
        colors={[
          getThemeColor("gradientThreeOpaque"),
          getThemeColor("gradientTwoOpaque"),
          getThemeColor("gradientOneOpaque"),
        ]}
      >
        {children}
      </LinearGradient>
    </View>
  );
}

export default GradientBackground;

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    marginLeft: normalize(20),
    marginRight: normalize(20),
    marginTop: normalize(12),
  },
  background: {
    paddingLeft: normalize(18),
    paddingRight: normalize(18),
    paddingTop: normalize(18),
  },
});
