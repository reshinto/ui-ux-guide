import React from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";

import ForumText from "../../ThemedComponents/StyledText/ForumText";

function TopicNumber({topicNumber}: {topicNumber: string}) {
  return <ForumText style={styles.container}>{topicNumber}</ForumText>;
}

export default TopicNumber;

const styles = StyleSheet.create({
  container: {
    width: normalize(46),
    height: "auto",
    fontSize: normalize(12),
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
  },
});
