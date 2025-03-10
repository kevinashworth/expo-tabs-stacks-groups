import React, { Suspense } from "react";
import { SplashScreen, Stack } from "expo-router";

import { LogBox, Text } from "react-native";

LogBox.ignoreLogs(["not a system font"]);

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </Suspense>
  );
}
