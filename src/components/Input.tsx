import { ReactNode, useState } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import spacing from "../constants/spacing";
import colors from "../constants/colors";
import fontSizes from "../constants/fontSizes";
import fontWeight from "../constants/fontWeight";
import borderWidth from "../constants/borderWidth";
import Text from "./Text";

type InputProps = Omit<TextInputProps, "style" | "placeholderTextColor"> & {
  error?: null | string;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
};

const Input = ({
  error,
  leftComponent,
  rightComponent,
  ...props
}: InputProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <View
      style={{
        gap: spacing.xs,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: selected ? colors.grey700 : colors.grey800,
          borderBottomColor: selected
            ? colors.grey200
            : error
            ? colors.danger_base
            : "transparent",
          borderRadius: spacing.sm,
          paddingHorizontal: spacing.md,
          borderBottomWidth: borderWidth.xs,
          gap: spacing.md,
        }}
      >
        {leftComponent}

        <TextInput
          onFocus={() => setSelected(true)}
          onBlur={() => setSelected(false)}
          style={{
            flex: 1,
            paddingVertical: spacing.sm,
            fontSize: fontSizes.md,
            fontWeight: fontWeight.medium,
            color: selected
              ? colors.grey200
              : error
              ? colors.danger_light
              : colors.grey300,
          }}
          placeholderTextColor={error ? colors.danger_light : colors.grey400}
          {...props}
        />

        {rightComponent}
      </View>

      {error && (
        <View style={{ marginHorizontal: spacing.md }}>
          <Text size="sm" color={colors.danger_base}>
            {error}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Input;
