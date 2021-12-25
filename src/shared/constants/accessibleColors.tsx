import React from "react";
import {TouchableOpacity} from "react-native";
import normalize from "react-native-normalize";

import ForumText from "../components/ThemedComponents/StyledText/ForumText";
import {openBrowser} from "../utils/helpers";

export const SECTION_TITLE_1 = "WHY ACCESSIBILITY?";

export const SECTION_TEXT_1 =
  "We want our digital products to be inslusive and accessible to all users, and there are many ways to achieve this; One of them is to be aware of color choice. Certain color combinations can make reading super difficult for people with dyslexia or reading/vision difficulties. Here are two must-follow rules on accessible colors.";

export const SECTION_TITLE_2 = "WHITE BACKGROUNDS";

export const SECTION_TEXT_2 =
  "Avoid using pure white (#FFFFFF) as your background color as it can be jarring to the eyes for some. If you want to use white, always go for an off-white shade like the background color of this app (#F8F8F8).";

export const SECTION_TITLE_3 = "COLOR CONTRAST";

export const SECTION_TEXT_3 = (() => (
  <ForumText>
    The foreground and background color contrast ratio should be above a certain
    number for elements to be clearly legible and visible. You can check with
    this{" "}
    <TouchableOpacity
      style={{paddingLeft: normalize(20)}}
      onPress={() =>
        openBrowser("https://webaim.org/resources/contrastchecker/")
      }
    >
      <ForumText
        style={{paddingLeft: normalize(0), textDecorationLine: "underline"}}
      >
        Contrast Checker.
      </ForumText>
    </TouchableOpacity>
  </ForumText>
))();
