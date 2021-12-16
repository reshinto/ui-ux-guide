import {LogBox} from "react-native";

export default function useIgnoreLogs() {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
}