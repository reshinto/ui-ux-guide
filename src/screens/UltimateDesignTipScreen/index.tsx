import React, {useEffect} from "react";
import {StyleSheet, Image} from "react-native";
import {useRoute} from "@react-navigation/native";
import normalize from "react-native-normalize";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import UltimateDesignTipText from "../../assets/svgs/UltimateDesignTipText.svg";
import * as texts from "../../shared/constants/ultimateDesignTip";
import ScreenTitle from "../../shared/components/ScreenTitle";
import ScreenSection from "../../shared/components/ScreenSection";
import ScreenScrollableWrapper from "../../shared/components/ScreenScrollableWrapper";
import spongebob from "../../assets/images/misc/spongebob.gif";
import m from "../../assets/images/misc/m.png";
import Dimensions from "../../shared/styles/layout";

function UltimateDesignTipScreen() {
  const {params} = useRoute<ScreenRouteProps<"UltimateDesignTip">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScreenScrollableWrapper>
        <ScreenTitle svgScreenTitle={UltimateDesignTipText} />
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
        <View style={styles.misc}>
          <Image style={styles.image} source={spongebob} />
          <Image style={styles.image2} source={m} />
        </View>
      </ScreenScrollableWrapper>
    </View>
  );
}

export default UltimateDesignTipScreen;

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
    height: normalize(221),
    width: normalize(335),
    position: "absolute",
    left: Dimensions.window.width / 2 - normalize(335) / 2,
  },
  image2: {
    position: "absolute",
    width: normalize(105),
    height: normalize(107),
    right: Dimensions.window.width / 2 - normalize(335) / 2 + normalize(25),
    top: normalize(3),
  },
});
