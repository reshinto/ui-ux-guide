import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import UiKitsText from "../../assets/svgs/UiKitsText.svg";
import * as texts from "../../shared/constants/uiKits";
import ScreenTitle from "../../shared/components/ScreenTitle";
import ScreenSection from "../../shared/components/ScreenSection";
import ScreenScrollableWrapper from "../../shared/components/ScreenScrollableWrapper";

function UiKitsScreen() {
  const {params} = useRoute<ScreenRouteProps<"UiKits">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScreenScrollableWrapper>
        <ScreenTitle svgScreenTitle={UiKitsText} />
        <ScreenSection
          sectionTitle={texts.SECTION_TITLE_1}
          sectionText={texts.SECTION_TEXT_1}
          index={0}
        />
        <ScreenSection
          sectionTitle={texts.SECTION_TITLE_2}
          sectionText={texts.SECTION_TEXT_2}
          sectionPointsArr={texts.SECTION_POINTS_2}
        />
      </ScreenScrollableWrapper>
    </View>
  );
}

export default UiKitsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
