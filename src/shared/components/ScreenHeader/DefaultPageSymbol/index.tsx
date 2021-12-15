import React from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";
import ForumText from "../../ThemedComponents/StyledText/ForumText";

function DefaultPageSymbol() {
  return (
    <ForumText style={styles.container}>
      <ForumText style={styles.symbol}>*****</ForumText>
    </ForumText>
  );
}

export default DefaultPageSymbol;

const styles = StyleSheet.create({
  container: {
    width: normalize(46),
    height: "auto",
    position: "relative",
    paddingTop: normalize(12),
  },
  symbol: {
    width: "auto",
    height: "auto",
    fontSize: normalize(28),
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
  },
});
