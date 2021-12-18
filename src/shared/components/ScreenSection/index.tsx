import React from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";

import {getThemeColor} from "../../utils/helpers";
import Pointer from "../Pointer";
import ForumText from "../ThemedComponents/StyledText/ForumText";
import View from "../ThemedComponents/View";

function ScreenSection({
  sectionTitle,
  sectionText,
  sectionPointsArr,
  index,
}: {
  sectionTitle?: string;
  sectionText?: string;
  sectionPointsArr?: string[];
  index?: number;
}) {
  return (
    <View>
      <ForumText
        style={[
          styles.text,
          styles.sectionTitle,
          {color: getThemeColor("sectionTitle")},
          index === 0 ? {marginTop: 0} : {},
        ]}
      >
        {sectionTitle}
      </ForumText>
      <ForumText style={[styles.text, styles.sectionText]}>
        {sectionText}
      </ForumText>
      {sectionPointsArr &&
        sectionPointsArr.map((point, index) => (
          <View key={index} style={styles.pointTextContainer}>
            <Pointer />
            <ForumText style={[styles.pointText]}>{point}</ForumText>
          </View>
        ))}
    </View>
  );
}

export default ScreenSection;

const styles = StyleSheet.create({
  text: {
    paddingLeft: normalize(20),
    paddingRight: normalize(20),
  },
  sectionTitle: {
    fontSize: normalize(20),
    lineHeight: normalize(22),
    marginTop: normalize(32),
  },
  sectionText: {
    marginTop: normalize(8),
    fontSize: normalize(16),
    lineHeight: normalize(24),
  },
  pointTextContainer: {
    marginLeft: normalize(30),
    flexDirection: "row",
    alignItems: "center",
  },
  pointText: {
    fontSize: normalize(16),
    lineHeight: normalize(24),
  },
});
