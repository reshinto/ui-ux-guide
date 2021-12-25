import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import CreatingComponentsText from "../../assets/svgs/CreatingComponentsText.svg";
import * as texts from "../../shared/constants/creatingComponents";
import ScreenTitle from "../../shared/components/ScreenTitle";
import ScreenSection from "../../shared/components/ScreenSection";
import ScreenScrollableWrapper from "../../shared/components/ScreenScrollableWrapper";
import InstructionExample from "../../shared/components/InstructionExample";

function CreatingComponentsScreen() {
  const {params} = useRoute<ScreenRouteProps<"CreatingComponents">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScreenScrollableWrapper>
        <ScreenTitle svgScreenTitle={CreatingComponentsText} />
        <ScreenSection
          sectionTitle={texts.SECTION_TITLE_1}
          sectionText={texts.SECTION_TEXT_1}
          index={0}
        />
        <ScreenSection sectionTitle={texts.SECTION_TITLE_2} />
        <InstructionExample example={texts.SECTION_INSTRUCTION_EXAMPLE_2} />
      </ScreenScrollableWrapper>
    </View>
  );
}

export default CreatingComponentsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
