import {useNavigation} from "@react-navigation/native";
import React, {memo} from "react";
import {StyleSheet} from "react-native";
import {Slider as DefaultSlider} from "react-native-elements";
import normalize from "react-native-normalize";

import {getThemeColor} from "../../utils/helpers";
import {getScreenNameFromPageNum} from "../../utils/helpers/rootNavigator";
import Text from "../ThemedComponents/Text";
import View from "../ThemedComponents/View";
import SliderBall from "./SliderBall";

function Slider({
  maxPageNumber,
  currentPageNumber,
  setCurrentPageNumber,
}: {
  maxPageNumber: number;
  currentPageNumber: number;
  setCurrentPageNumber: any;
}) {
  const navigation = useNavigation();

  const handleValueChange = (currentPage: number) => {
    setCurrentPageNumber(currentPage);
  };

  const handleScreenChange = (currentPage: number) => {
    navigation.reset({
      index: 0,
      routes: [{name: getScreenNameFromPageNum(currentPage)}] as any,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.corners, styles.leftCorner]}>&#11045;</Text>
      <Text style={[styles.corners, styles.rightCorner]}>&#11045;</Text>
      <DefaultSlider
        value={currentPageNumber}
        onValueChange={handleValueChange}
        onSlidingComplete={handleScreenChange}
        maximumValue={maxPageNumber}
        minimumValue={0}
        step={1}
        allowTouchTrack={true}
        minimumTrackTintColor={getThemeColor("text")}
        maximumTrackTintColor={getThemeColor("text")}
        thumbTouchSize={styles.thumbTouchSize}
        trackStyle={styles.trackStyle}
        thumbStyle={styles.thumbStyle}
        thumbProps={{
          children: <SliderBall />,
        }}
      />
    </View>
  );
}

export default memo(Slider);

const styles = StyleSheet.create({
  container: {
    height: normalize(52),
    width: "100%",
    paddingLeft: normalize(24),
    paddingRight: normalize(24),
    justifyContent: "center",
    position: "relative",
  },
  corners: {
    position: "absolute",
  },
  leftCorner: {
    left: normalize(21),
  },
  rightCorner: {
    right: normalize(21),
  },
  thumbTouchSize: {
    width: normalize(52),
    height: normalize(52),
  },
  trackStyle: {
    height: normalize(1.5),
  },
  thumbStyle: {
    height: normalize(20),
    width: normalize(20),
    backgroundColor: "transparent",
  },
});
