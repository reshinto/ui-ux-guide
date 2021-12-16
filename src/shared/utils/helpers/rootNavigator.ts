import {SCREEN_DATA} from "../../constants/navigation";

export const getScreenNameFromPageNum = (num: number) =>
  ({
    "0": SCREEN_DATA.Root.name,
    "1": SCREEN_DATA.Home.name,
    "2": SCREEN_DATA.NotFound.name,
  }[num.toString()]);

export const getPageNumFromScreenName = (name: string) =>
  SCREEN_DATA[name].data.pageNumber;
