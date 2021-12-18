import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import normalize from "react-native-normalize";
import {useRoute} from "@react-navigation/native";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import {getThemeColor} from "../../shared/utils/helpers";
import AboutText from "../../assets/svgs/AboutText.svg";
import ContentsIcon from "../../assets/svgs/ContentsIcon.svg";
import ForumText from "../../shared/components/ThemedComponents/StyledText/ForumText";
import * as aboutTexts from "../../shared/constants/about";

function AboutScreen() {
  const {params} = useRoute<ScreenRouteProps<"About">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.box}>
      <View style={styles.svgContainer}>
        <AboutText fill={getThemeColor("text")} />
        <ContentsIcon />
      </View>
      <ForumText
        style={[
          styles.text,
          styles.sectionTitle,
          {color: getThemeColor("sectionTitle")},
        ]}
      >
        {aboutTexts.SECTION_TITLE}
      </ForumText>
      <ForumText style={[styles.text, styles.sectionText]}>
        {aboutTexts.SECTION_TEXT}
      </ForumText>
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  box: {
    height: "100%",
  },
  svgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: normalize(20),
    paddingRight: normalize(20),
  },
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
});
