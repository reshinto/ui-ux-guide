import React, {useEffect} from "react";
import {StyleSheet, Image} from "react-native";
import {useRoute} from "@react-navigation/native";
import normalize from "react-native-normalize";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import Always4pxSizingText from "../../assets/svgs/Always4pxSizingText.svg";
import * as texts from "../../shared/constants/always4pxSizing";
import ScreenTitle from "../../shared/components/ScreenTitle";
import ScreenSection from "../../shared/components/ScreenSection";
import ScreenScrollableWrapper from "../../shared/components/ScreenScrollableWrapper";
import ShortcutCmdExample from "../../shared/components/ShortcutCmdExample";
import pixel from "../../assets/images/misc/pixel.gif";
import Dimensions from "../../shared/styles/layout";

function Always4pxSizingScreen() {
  const {params} = useRoute<ScreenRouteProps<"Always4pxSizing">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScreenScrollableWrapper>
        <ScreenTitle svgScreenTitle={Always4pxSizingText} />
        <ScreenSection
          sectionTitle={texts.SECTION_TITLE_1}
          sectionText={texts.SECTION_TEXT_1}
          sectionPointsArr={texts.SECTION_POINTS_1}
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
        <ShortcutCmdExample example={texts.SECTION_SHORTCUT_EXAMPLE_3} />
        <View style={styles.misc}>
          <Image style={styles.image} source={pixel} />
        </View>
      </ScreenScrollableWrapper>
    </View>
  );
}

export default Always4pxSizingScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  misc: {
    width: "100%",
    marginTop: normalize(28),
    position: "relative",
    height: normalize(221),
  },
  image: {
    height: normalize(184),
    width: normalize(335),
    position: "absolute",
    left: Dimensions.window.width / 2 - normalize(335) / 2,
  },
});
