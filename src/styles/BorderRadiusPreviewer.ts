import styled from "styled-components/native";

export const Container = styled.View``;

type BoxProps = {
  borderRadius: {
    topLeft: string;
    topRight: string;
    bottomRight: string;
    bottomLeft: string;
  };
  verticalRadius: {
    topLeft: string;
    topRight: string;
    bottomRight: string;
    bottomLeft: string;
  };
};

export const Box = styled.View<BoxProps>`
  border-radius: ${({ borderRadius, verticalRadius }) =>
    `${borderRadius.topLeft}px ${borderRadius.topRight}px ${borderRadius.bottomRight}px ${borderRadius.bottomLeft}px / ${verticalRadius.topLeft}px ${verticalRadius.topRight}px ${verticalRadius.bottomRight}px ${verticalRadius.bottomLeft}px`};
`;
