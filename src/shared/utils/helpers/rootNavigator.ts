import {APP_DATA} from "../../constants/navigation";

export const getScreenNameFromPageNum = (num: number) => APP_DATA[num].name;

export const getPageNumFromScreenName = (name: string) => APP_DATA.findIndex((screen) => screen.name === name);
