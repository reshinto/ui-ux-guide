import image1 from "../../assets/images/findingIcons/image1.png";
import image2 from "../../assets/images/findingIcons/image2.png";
import image3 from "../../assets/images/findingIcons/image3.png";
import FatPen from "../../assets/svgs/FatPen";
import ThinPen from "../../assets/svgs/ThinPen.svg";

export const SECTION_TITLE_1 = "IMPORTANCE OF ICONS"; 

export const SECTION_TEXT_1 = "Icons are a critical part of many mobile apps and websites alike. From the UX perspective, it can act as useful visual cues for users to find what they are looking for and have a better digital experience overall. From the UI perspective, the style of the icons can drastically change the overall branding of the product. Here is an example!";

export const SECTION_EXCEPTION_1 = [
  {
    SvgIcon: undefined,
    text: "Edit Icon",
  },
  {
    SvgIcon: FatPen,
    text: "Square shaped icons with rounded radius gives off a soft, friendly tone.",
  },
  {
    SvgIcon: ThinPen,
    text: "Where as the 0 radius icons give off more of a sharp, professional tone.",
  },
];

export const SECTION_TITLE_2 = "WHERE TO FIND ICONS";

export const SECTION_TEXT_2 = "Of course you can design your original icons if you want, but with busy client projects or apps without a specific branding, you probably want to use existing open source icons.\nThe Figma community has free plug-ins you can download from. Just simply input “icons” in the seach bar. Online websites also provide free icons. Here are some of my favourites:";

export const SECTION_EXAMPLE_ICONS_2 = [
  {
    image: image1,
    text: "Icon Finder",
    url: "https://www.iconfinder.com/",
  },
  {
    image: image2,
    text: "Icons8",
    url: "https://icons8.com/icons/set/location",
  },
  {
    image: image3,
    text: "Noun Project",
    url: "https://thenounproject.com/search/icons/?iconspage=1&q=locatin",
  },
];