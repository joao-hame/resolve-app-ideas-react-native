import { View, TouchableOpacity } from "react-native";
import Text from "./Text";
import spacing from "../constants/spacing";
import borderRadius from "../constants/borderRadius";
import colors from "../constants/colors";

const buttonColors = {
  success: {
    enabled: colors.success_base,
    disabled: colors.success_low,
  },
  danger: {
    enabled: colors.danger_base,
    disabled: colors.danger_low,
  },
  new: {
    enabled: colors.new_base,
    disabled: colors.new_low,
  },
};

type ButtonProps = {
  onPress?(): void;
  onLongPress?(): void;
  type: keyof typeof buttonColors;
  disabled?: boolean;
  label: string;
};

const Button = ({
  onPress,
  onLongPress,
  type,
  disabled,
  label,
}: ButtonProps) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    onLongPress={onLongPress}
  >
    <View
      style={{
        backgroundColor: buttonColors[type][disabled ? "disabled" : "enabled"],
        padding: spacing.sm,
        borderRadius: borderRadius.sm,
      }}
    >
      <Text align="center" color={disabled ? colors.grey300 : colors.grey200}>
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);

export default Button;
