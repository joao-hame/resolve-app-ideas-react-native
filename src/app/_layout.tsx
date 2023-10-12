import { Stack } from "expo-router";
import colors from "../constants/colors";

const Layout = () => (
  <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.grey950,
      },
      contentStyle: {
        backgroundColor: colors.grey900,
      },
      headerTintColor: colors.grey100,
    }}
  >
    <Stack.Screen name="index" options={{ title: "Home" }} />
  </Stack>
);

export default Layout;
