import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import normalize from "react-native-normalize";

import {getThemeColor, openBrowser} from "../../utils/helpers";
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
      {sectionText ? (
        <ForumText style={[styles.text, styles.sectionText]}>
          {sectionText}
        </ForumText>
      ) : null}
      {sectionPointsArr &&
        sectionPointsArr.map(({text, url}: any, idx: number) =>
          url ? (
            <TouchableOpacity
              key={idx}
              onPress={() => {
                openBrowser(url);
              }}
            >
              <View style={styles.pointTextContainer}>
                <Pointer />
                <ForumText style={[styles.pointText, styles.touchable]}>
                  {text}
                </ForumText>
              </View>
            </TouchableOpacity>
          ) : (
            <View key={idx} style={styles.pointTextContainer}>
              <Pointer />
              <ForumText style={[styles.pointText]}>{text}</ForumText>
            </View>
          )
        )}
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
  touchable: {
    textDecorationLine: "underline",
  },
});
