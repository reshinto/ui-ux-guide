import {SCREEN_NAMES} from "../../constants/navigation";

export const getScreenNameFromPageNum = (num: number) =>
  ({
    "0": SCREEN_NAMES.Root,
    "1": SCREEN_NAMES.Home,
    "2": SCREEN_NAMES.NotFound,
  }[num.toString()]);
