import { LinkingOptions } from "@react-navigation/native";
import { RootStackParamList } from "./navigationTypes";
import * as Linking from "expo-linking";

const LinkingConfig: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: "root",
      Contents: "contents",
      About: "about",
      NotFound: "*",
    },
  },
};

export default LinkingConfig;