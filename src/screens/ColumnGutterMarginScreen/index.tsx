import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import ColumnGutterMarginText from "../../assets/svgs/ColumnGutterMarginText.svg";
import * as texts from "../../shared/constants/columnGutterMargin";
import ScreenTitle from "../../shared/components/ScreenTitle";
import ScreenSection from "../../shared/components/ScreenSection";
import ScreenScrollableWrapper from "../../shared/components/ScreenScrollableWrapper";
import InstructionExample from "../../shared/components/InstructionExample";
import normalize from "react-native-normalize";
import ShortcutCmdExample from "../../shared/components/ShortcutCmdExample";

function ColumnGutterMarginScreen() {
  const {params} = useRoute<ScreenRouteProps<"ColumnGutterMargin">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScreenScrollableWrapper>
        <ScreenTitle svgScreenTitle={ColumnGutterMarginText} />
        <ScreenSection
          sectionTitle={texts.SECTION_TITLE_1}
          sectionText={texts.SECTION_TEXT_1}
          index={0}
        />
        <InstructionExample example={texts.SECTION_INSTRUCTION_EXAMPLE_1} />
        <ScreenSection
          sectionTitle={texts.SECTION_TITLE_2}
          sectionText={texts.SECTION_TEXT_2}
        />
        <ShortcutCmdExample example={texts.SECTION_SHORTCUT_EXAMPLE_2} />
      </ScreenScrollableWrapper>
    </View>
  );
}

export default ColumnGutterMarginScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
