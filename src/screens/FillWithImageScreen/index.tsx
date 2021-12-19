import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native";

import {ScreenRouteProps} from "../../shared/components/Navigation/navigationTypes";
import View from "../../shared/components/ThemedComponents/View";
import FillWithImageText from "../../assets/svgs/FillWithImageText.svg";
// import * as texts from "../../shared/constants/fillWithImage";
import ScreenTitle from "../../shared/components/ScreenTitle";
import ScreenSection from "../../shared/components/ScreenSection";
import ScreenScrollableWrapper from "../../shared/components/ScreenScrollableWrapper";

function FillWithImageScreen() {
  const {params} = useRoute<ScreenRouteProps<"FillWithImage">>() as any;

  useEffect(() => {
    if (params?.topicNumber !== params?.currentTopicNumber) {
      params?.setCurrentTopicNumber(params?.topicNumber);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScreenScrollableWrapper>
        <ScreenTitle svgScreenTitle={FillWithImageText} />
        <ScreenSection sectionTitle={""} sectionText={""} index={0} />
      </ScreenScrollableWrapper>
    </View>
  );
}

export default FillWithImageScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
