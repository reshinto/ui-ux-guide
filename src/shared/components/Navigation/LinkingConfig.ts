import { LinkingOptions } from "@react-navigation/native";
import { RootStackParamList } from "./navigationTypes";
import * as Linking from "expo-linking";

const LinkingConfig: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: "root",
      Home: "home",
      NotFound: "*",
    },
  },
};

export default LinkingConfig;