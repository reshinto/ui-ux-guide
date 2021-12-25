import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import TypefaceText from "../../assets/svgs/TypefaceText.svg";
import * as texts from "../../shared/constants/typeface";
import ScreenTitle from "../../shared/components/ScreenTitle";
import ScreenSection from "../../shared/components/ScreenSection";
import ScreenScrollableWrapper from "../../shared/components/ScreenScrollableWrapper";
import ExampleIcons from "../../shared/components/ExampleIcons";

function TypefaceScreen() {
  const {params} = useRoute<ScreenRouteProps<"Typeface">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScreenScrollableWrapper>
        <ScreenTitle svgScreenTitle={TypefaceText} />
        <ScreenSection
          sectionTitle={texts.SECTION_TITLE_1}
          sectionText={texts.SECTION_TEXT_1}
          index={0}
        />
        <ScreenSection sectionTitle={texts.SECTION_TITLE_2} sectionText={""} />
        <ExampleIcons example={texts.SECTION_EXAMPLE_ICONS_2} />
      </ScreenScrollableWrapper>
    </View>
  );
}

export default TypefaceScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
