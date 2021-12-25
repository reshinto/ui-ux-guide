import React from "react";
import {StyleSheet, Image, TouchableOpacity} from "react-native";
import normalize from "react-native-normalize";
import {getThemeColor, openBrowser} from "../../utils/helpers";

import GradientBackground from "../GradientBackground";
import ForumText from "../ThemedComponents/StyledText/ForumText";
import View from "../ThemedComponents/View";

function ExampleIcons({example}: any) {
  return (
    <GradientBackground>
      <View style={[styles.container, styles.removeBackground]}>
        {example.map(({image, text, url}: any, index: number) => (
          <>
            {index % 3 === 0 && (
              <View style={[styles.removeBackground, styles.break]}></View>
            )}
            <TouchableOpacity
              onPress={() => {
                openBrowser(url);
              }}
            >
              <View
                style={[
                  styles.removeBackground,
                  styles.contentsContainer,
                  index > 2 && {marginTop: normalize(40)},
                ]}
              >
                <Image source={image} style={styles.image} />
                <ForumText
                  style={[styles.text, {color: getThemeColor("shortcutText")}]}
                >
                  {text}
                </ForumText>
              </View>
            </TouchableOpacity>
          </>
        ))}
      </View>
    </GradientBackground>
  );
}

export default ExampleIcons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  removeBackground: {
    backgroundColor: "transparent",
  },
  contentsContainer: {
    alignItems: "center",
  },
  break: {
    flexBasis: "100%",
    width: 0,
  },
  image: {
    marginBottom: normalize(4),
    width: normalize(44),
    height: normalize(44),
  },
  text: {
    fontSize: normalize(16),
    lineHeight: normalize(24),
    textDecorationLine: "underline",
  },
});
