import { MaterialIcons } from "@expo/vector-icons";
import iconSizes from "../constants/iconSizes";

type IconProps = {
  size?: keyof typeof iconSizes;
  name: keyof typeof MaterialIcons.glyphMap;
  color: string;
};

const Icon = ({ size, ...rest }: IconProps) => (
  <MaterialIcons size={iconSizes[size ?? "md"]} {...rest} />
);

export default Icon;
