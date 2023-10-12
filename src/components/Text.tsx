import { TextProps as TextPropsRN, Text as TextRN } from "react-native";
import fontSizes from "../constants/fontSizes";
import fontWeight from "../constants/fontWeight";
import colors from "../constants/colors";
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export type TextProps = Omit<TextPropsRN, "style"> & {
  size?: keyof typeof fontSizes;
  weight?: keyof typeof fontWeight;
  color?: string;
  align?: TextStyle["textAlign"];
};

const Text = ({
  size = "md",
  weight = "medium",
  color = colors.grey200,
  align,
  ...props
}: TextProps) => (
  <TextRN
    style={{
      fontSize: fontSizes[size],
      fontWeight: fontWeight[weight],
      color,
      textAlign: align,
    }}
    {...props}
  />
);

export default Text;
