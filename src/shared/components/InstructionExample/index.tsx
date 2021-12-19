import React from "react";
import {Image, StyleSheet} from "react-native";
import normalize from "react-native-normalize";

import {colors} from "../../styles/palette";
import {getThemeColor} from "../../utils/helpers";
import GradientBackground from "../GradientBackground";
import Pointer from "../Pointer";
import ForumText from "../ThemedComponents/StyledText/ForumText";
import View from "../ThemedComponents/View";

function InstructionExample({example}: any) {
  return (
    <GradientBackground>
      {example.map((content: any, index: number) => (
        <View
          key={index}
          style={[styles.removeBackground, styles.contentsContainer]}
        >
          <View style={styles.indexContainer}>
            <ForumText
              style={[styles.index, {color: getThemeColor("bulletText")}]}
            >
              {index + 1}
            </ForumText>
          </View>
          <View style={[styles.removeBackground, styles.textImageContainer]}>
            <ForumText style={[styles.textContainer, styles.text]}>
              {content.text}
            </ForumText>
            {content.points.length
              ? content.points.map((point: string, index: number) => (
                  <View
                    key={index}
                    style={[styles.removeBackground, styles.pointTextContainer]}
                  >
                    <Pointer />
                    <ForumText style={[styles.text]}>{point}</ForumText>
                  </View>
                ))
              : null}
            {content.image && (
              <Image
                source={content.image}
                style={[styles.image, {height: normalize(content.imageHeight)}]}
              />
            )}
          </View>
        </View>
      ))}
    </GradientBackground>
  );
}

export default InstructionExample;

const styles = StyleSheet.create({
  removeBackground: {
    backgroundColor: "transparent",
  },
  contentsContainer: {
    flexDirection: "row",
    paddingBottom: normalize(24),
  },
  indexContainer: {
    backgroundColor: colors.lightGrey,
    borderRadius: normalize(30),
    width: normalize(20),
    height: normalize(20),
    justifyContent: "center",
    marginRight: normalize(16),
  },
  index: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: normalize(12),
  },
  textImageContainer: {
    justifyContent: "flex-start",
  },
  textContainer: {
    width: normalize(267),
  },
  text: {
    fontSize: normalize(16),
    lineHeight: normalize(24),
  },
  pointTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: normalize(10),
    marginRight: normalize(10),
  },
  imageContainer: {
    width: normalize(189),
  },
  image: {
    width: normalize(189),
    resizeMode: "contain",
    marginTop: normalize(8),
  },
});
