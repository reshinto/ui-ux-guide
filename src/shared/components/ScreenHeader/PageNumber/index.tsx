import React from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";
import ForumText from "../../ThemedComponents/StyledText/ForumText";

function PageNumber({pageNumber}: {pageNumber: string}) {
  return <ForumText style={styles.container}>{pageNumber}</ForumText>;
}

export default PageNumber;

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
