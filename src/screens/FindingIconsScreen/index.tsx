import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import FindingIconsText from "../../assets/svgs/FindingIconsText.svg";
import * as texts from "../../shared/constants/findingIcons";
import ScreenTitle from "../../shared/components/ScreenTitle";
import ScreenSection from "../../shared/components/ScreenSection";
import ScreenScrollableWrapper from "../../shared/components/ScreenScrollableWrapper";
import ExampleIcons from "../../shared/components/ExampleIcons";
import GradientBackground from "../../shared/components/GradientBackground";
import ForumText from "../../shared/components/ThemedComponents/StyledText/ForumText";
import {getThemeColor} from "../../shared/utils/helpers";
import normalize from "react-native-normalize";

function FindingIconsScreen() {
  const {params} = useRoute<ScreenRouteProps<"FindingIcons">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScreenScrollableWrapper>
        <ScreenTitle svgScreenTitle={FindingIconsText} />
        <ScreenSection
          sectionTitle={texts.SECTION_TITLE_1}
          sectionText={texts.SECTION_TEXT_1}
          index={0}
        />
        <GradientBackground>
          {texts.SECTION_EXCEPTION_1.map(
            ({SvgIcon, text}: any, index: number) => (
              <View
                key={index}
                style={[
                  styles.removeBackground,
                  styles.exceptionContentContainer,
                  index === 0 && {marginTop: normalize(0)},
                ]}
              >
                {SvgIcon && (
                  <SvgIcon style={styles.svg} fill={getThemeColor("text")} />
                )}
                <ForumText style={styles.exceptionText}>{text}</ForumText>
              </View>
            )
          )}
        </GradientBackground>
        <ScreenSection
          sectionTitle={texts.SECTION_TITLE_2}
          sectionText={texts.SECTION_TEXT_2}
        />
        <ExampleIcons example={texts.SECTION_EXAMPLE_ICONS_2} />
      </ScreenScrollableWrapper>
    </View>
  );
}

export default FindingIconsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  removeBackground: {
    backgroundColor: "transparent",
  },
  exceptionContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalize(16),
  },
  svg: {
    marginRight: normalize(16),
  },
  exceptionText: {
    width: normalize(251),
    fontSize: normalize(16),
    lineHeight: normalize(18),
  },
});
