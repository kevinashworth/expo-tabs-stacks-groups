import React from "react";
import { Text, View } from "react-native";
import { Stack } from "expo-router";

export default function SettingsPage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "Settings Custom Title",
        }}
      />
      <Text style={{ padding: 8, fontSize: 20, marginBottom: 16 }}>
        Settings Page
      </Text>
      <Text
        style={{
          padding: 8,
          fontSize: 12,
          marginBottom: 16,
          color: "gray",
        }}
      >
        This page is{" "}
        <Text style={{ fontFamily: "SpaceMono" }}>
          app/(tabs)/home/index.tsx
        </Text>
      </Text>
    </View>
  );
}
