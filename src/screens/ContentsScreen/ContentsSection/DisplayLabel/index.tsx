import React from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";

import View from "../../../../shared/components/ThemedComponents/View";
import {getThemeColor} from "../../../../shared/utils/helpers";

function DisplayLabel({Label}: any) {
  if (Label) {
    return (
      <View style={styles.container}>
        <Label width={normalize(10)} fill={getThemeColor("text")} />
      </View>
    );
  }
  return <View style={styles.container}></View>;
}

export default DisplayLabel;

const styles = StyleSheet.create({
  container: {
    marginBottom: normalize(12),
    justifyContent: "center",
    width: normalize(10),
  },
});
