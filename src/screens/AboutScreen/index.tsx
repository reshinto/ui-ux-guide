import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import AboutText from "../../assets/svgs/AboutText.svg";
import * as aboutTexts from "../../shared/constants/about";
import ScreenTitle from "../../shared/components/ScreenTitle";
import ScreenSection from "../../shared/components/ScreenSection";

function AboutScreen() {
  const {params} = useRoute<ScreenRouteProps<"About">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScreenTitle svgScreenTitle={AboutText} />
      <ScreenSection
        sectionTitle={aboutTexts.SECTION_TITLE}
        sectionText={aboutTexts.SECTION_TEXT}
      />
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
