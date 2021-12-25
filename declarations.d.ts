declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.StatelessComponent<SvgProps>;
  export default content;
}

declare module '*.png';

declare module '*.gif';