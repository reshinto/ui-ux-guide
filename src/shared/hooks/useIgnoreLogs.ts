import {LogBox} from "react-native";

export default function useIgnoreLogs() {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
    "Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle",
    'Warning: Each child in a list should have a unique "key" prop.',
  ]);
}