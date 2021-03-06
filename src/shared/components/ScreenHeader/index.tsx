import React from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";

import View from "../ThemedComponents/View";
import ForumText from "../ThemedComponents/StyledText/ForumText";
import DefaultPageSymbol from "./DefaultPageSymbol";
import TopicNumber from "./TopicNumber";

function ScreenHeader({topicNumber}: {topicNumber: string | undefined}) {
  const topicNumberText = topicNumber ? (
    <TopicNumber topicNumber={topicNumber} />
  ) : (
    <DefaultPageSymbol />
  );

  return (
    <View style={styles.container}>
      <ForumText style={styles.text}>Mobile UI</ForumText>
      {topicNumberText}
    </View>
  );
}

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "4%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingLeft: normalize(20),
    paddingRight: normalize(20),
  },
  text: {
    width: normalize(47),
    height: "auto",
    fontSize: normalize(12),
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
  },
});
