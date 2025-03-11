import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

export default function HomePage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ThemedText style={{ padding: 8, fontSize: 20, marginBottom: 16 }}>
        This page is "pushed WITHIN" the tab bar because it's UNDER the "tabs"
        file structure. Upon clicking through to{" "}
        <Text style={{ color: "rgb(0,122,255)" }}>Settings Page</Text>, the tab
        bar will remain visible.
      </ThemedText>
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
      <Link href="/home/settings" asChild>
        <Pressable>
          <Text
            style={{
              color: "rgb(0,122,255)",
              fontSize: 20,
              textDecorationLine: "underline",
            }}
          >
            Settings Page
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
