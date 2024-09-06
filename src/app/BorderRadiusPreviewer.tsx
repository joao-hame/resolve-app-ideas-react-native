import { Box, Container } from "@/styles/BorderRadiusPreviewer";
import { useState } from "react";

const BorderRadiusPreviewer = () => {
  const [borderRadius, setBorderRadius] = useState();
  const [verticalRadius, setVerticalRadius] = useState();

  return (
    <Container>
      <Box />
    </Container>
  );
};

export default BorderRadiusPreviewer;
