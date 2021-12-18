import React from "react";
import {StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import normalize from "react-native-normalize";

import View from "../../../../shared/components/ThemedComponents/View";
import {getThemeColor} from "../../../../shared/utils/helpers";

function DisplayGradient({Label, sectionHeight}: any) {
  if (Label) {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={[0, 0]}
          end={[1, 1]}
          locations={[0, 0.5, 1]}
          style={[styles.main, {height: sectionHeight - normalize(16)}]}
          colors={[
            getThemeColor("gradientThree"),
            getThemeColor("gradientTwo"),
            getThemeColor("gradientOne"),
          ]}
        ></LinearGradient>
      </View>
    );
  }
  return <View style={styles.container}></View>;
}

export default DisplayGradient;

const styles = StyleSheet.create({
  container: {
    marginBottom: normalize(12),
    width: normalize(24),
    paddingLeft: normalize(8),
    paddingRight: normalize(12),
  },
  main: {
    width: "100%",
  },
});
