import { Stack, useGlobalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function DetailsPage() {
  const { id } = useGlobalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen options={{ headerTitle: `Details Post #${id}` }} />
      <Text style={{ padding: 8, fontSize: 20, marginBottom: 16 }}>
        Details for post {id}
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
        <Text style={{ fontFamily: "SpaceMono" }}>app/posts/[id].tsx</Text>
      </Text>
    </View>
  );
}
