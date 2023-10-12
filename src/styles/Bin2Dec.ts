import styled from "styled-components/native";
import spacing from "@/constants/spacing";
import colors from "@/constants/colors";
import borderRadius from "@/constants/borderRadius";
import borderWidth from "@/constants/borderWidth";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${spacing.xs}px;
  gap: ${spacing.sm}px;
`;

export const ActionButtonsContainer = styled.View`
  flex-direction: row;
  gap: ${spacing.xs}px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
`;

export const FlatList = styled.FlatList`
  flex: 1;
  background-color: ${colors.grey600};
  border-radius: ${borderRadius.xs}px;
  padding: ${spacing.sm}px;
`;

export const InputFlatListItemSeparator = styled.View`
  height: ${spacing.sm}px;
`;

export const ResolveFlatListItemSeparator = styled.View`
  height: ${borderWidth.xs}px;
  margin: 0 ${spacing.xs}px;
  background-color: ${colors.grey700};
`;
