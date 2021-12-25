import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import AccessibleColorsText from "../../assets/svgs/AccessibleColorsText.svg";
import * as texts from "../../shared/constants/accessibleColors";
import ScreenTitle from "../../shared/components/ScreenTitle";
import ScreenSection from "../../shared/components/ScreenSection";
import ScreenScrollableWrapper from "../../shared/components/ScreenScrollableWrapper";

function AccessibleColorsScreen() {
  const {params} = useRoute<ScreenRouteProps<"AccessibleColors">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScreenScrollableWrapper>
        <ScreenTitle svgScreenTitle={AccessibleColorsText} />
        <ScreenSection
          sectionTitle={texts.SECTION_TITLE_1}
          sectionText={texts.SECTION_TEXT_1}
          index={0}
        />
        <ScreenSection
          sectionTitle={texts.SECTION_TITLE_2}
          sectionText={texts.SECTION_TEXT_2}
        />
        <ScreenSection
          sectionTitle={texts.SECTION_TITLE_3}
          sectionText={texts.SECTION_TEXT_3}
        />
      </ScreenScrollableWrapper>
    </View>
  );
}

export default AccessibleColorsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
